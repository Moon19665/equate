import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const initialData = [
  { department: 'Compliance', count: 4, location: 'USA', jobs: ['Analyst', 'Risk Manager', 'Legal Officer', 'Audit Specialist'] },
  { department: 'Data', count: 9, location: 'UK', jobs: ['Data Engineer', 'BI Analyst', 'ML Engineer', 'Data Scientist'] },
  { department: 'Design', count: 3, location: 'Remote', jobs: ['UX Designer', 'UI Designer', 'Graphic Designer'] },
  { department: 'Engineering', count: 22, location: 'USA', jobs: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'QA Engineer'] },
  { department: 'Finance', count: 4, location: 'Canada', jobs: ['Financial Analyst', 'Controller', 'Budget Planner', 'Accountant'] },
  { department: 'Marketing', count: 12, location: 'Remote', jobs: ['Content Strategist', 'SEO Analyst', 'Marketing Manager'] },
  { department: 'Operations', count: 8, location: 'USA', jobs: ['Ops Manager', 'Logistics Coordinator', 'Customer Ops'] },
  { department: 'People', count: 5, location: 'Canada', jobs: ['HR Generalist', 'Recruiter', 'People Ops Specialist'] },
  { department: 'Product', count: 4, location: 'UK', jobs: ['Product Manager', 'Product Owner', 'UX Researcher'] },
];

export default function JobOpeningsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const uniqueDepts = ['All', ...new Set(initialData.map(d => d.department))];
    const uniqueLocations = ['All', ...new Set(initialData.map(d => d.location))];
    setDepartments(uniqueDepts);
    setLocations(uniqueLocations);
  }, []);

  useEffect(() => {
    let data = initialData;
    if (selectedDept !== 'All') {
      data = data.filter(d => d.department === selectedDept);
    }
    if (selectedLocation !== 'All') {
      data = data.filter(d => d.location === selectedLocation);
    }
    setFilteredData(data);
  }, [selectedDept, selectedLocation]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 bg-white max-w-7xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Our openings</h3>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
        Join us and empower the next generation of business.
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        To view our applicant privacy policy, click <span className="underline cursor-pointer">here</span>.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="border border-gray-300 rounded px-4 py-2 text-sm"
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          {departments.map((d, i) => (
            <option key={i}>{d}</option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2 text-sm"
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map((l, i) => (
            <option key={i}>{l}</option>
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
            <div key={idx} className="py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {dept.department} <span className="text-orange-600 font-semibold">({dept.count})</span>
                </h3>
                {openIndex === idx ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
              {openIndex === idx && (
                <ul className="mt-4 ml-4 space-y-2">
                  {dept.jobs.map((job, jIdx) => (
                    <li
                      key={jIdx}
                      className="text-gray-700 text-sm hover:underline cursor-pointer"
                    >
                      {job}
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