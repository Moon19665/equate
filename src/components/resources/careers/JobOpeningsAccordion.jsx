"use client";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { initialData } from '@/data/jobs'; // ✅ Import the job list



export default function JobOpeningsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    setDepartments(['All', ...new Set(initialData.map((d) => d.department))]);
    setLocations(['All', ...new Set(initialData.map((d) => d.location))]);
  }, []);

  useEffect(() => {
    let data = [...initialData];
    if (selectedDept !== 'All') {
      data = data.filter((d) => d.department === selectedDept);
    }
    if (selectedLocation !== 'All') {
      data = data.filter((d) => d.location === selectedLocation);
    }
    setFilteredData(data);
  }, [selectedDept, selectedLocation]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

  return (
    <section className="px-3 md:px-12 py-16 bg-white max-w-[1920px] mx-auto">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Our openings</h3>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
        Join us and empower the next generation of business.
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        To view our applicant privacy policy, click{' '}
        <span className="underline cursor-pointer">here</span>.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="border border-gray-300 rounded px-4 py-2 text-sm"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          {departments.map((dept, i) => (
            <option key={i} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2 text-sm"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <button
          className="px-4 py-2 text-sm border rounded border-gray-300 hover:bg-gray-100"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy link
        </button>
      </div>

      {/* Accordion */}
      <div className="divide-y divide-gray-200">
        {filteredData.length === 0 ? (
          <p className="text-gray-500">No results found for the selected filters.</p>
        ) : (
          filteredData.map((dept, idx) => (
            <div key={dept.department} className="py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {dept.department}{' '}
                  <span className="text-[#033175] font-semibold">
                    ({dept.count})
                  </span>
                </h3>
                {openIndex === idx ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
              {openIndex === idx && (
                <ul className="mt-4 ml-4 space-y-2">
                  {dept.jobs.map((job) => (
                    <li key={job.title}>
                      <Link
                        href={`/jobdetail/${slugify(job.title)}`}
                        className="text-gray-700 text-sm hover:underline"
                      >
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
