'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

export default function JobDetail({ title, location, description, requirements }) {
  const router = useRouter();

  useEffect(() => {
    document.title = `${title} | Careers`;
  }, [title]);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    resume: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().required('City is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => router.push('/careers')}
        >
          Careers
        </span>{' '}
        &gt; <span className="text-black">{title}</span>
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-1">{title}</h1>
      <p className="text-gray-600 mb-8">{location}</p>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Why join us</h2>
        {description.map((para, index) => (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Requirements */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Apply for this job</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block font-medium text-gray-700">First Name*</label>
                <Field name="firstName" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Last Name */}
              <div>
                <label className="block font-medium text-gray-700">Last Name*</label>
                <Field name="lastName" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-gray-700">Email*</label>
                <Field type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium text-gray-700">Phone</label>
                <Field name="phone" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              {/* City */}
              <div className="md:col-span-2">
                <label className="block font-medium text-gray-700">Location (City)*</label>
                <Field name="city" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Resume */}
              <div className="md:col-span-2">
                <label className="block font-medium text-gray-700">Resume (Paste Text)</label>
                <Field name="resume" as="textarea" rows="4" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2" />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                  Submit Application
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
