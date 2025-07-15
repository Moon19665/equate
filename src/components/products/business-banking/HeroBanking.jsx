'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

export default function HeroBanking() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success(`Thanks! We'll reach out to ${values.email}`);
      resetForm();
    },
  });

  return (
    <div className="w-full bg-white flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center pt-10 pb-16 max-w-[1920px] mx-auto px-3 md:px-12">
        {/* Headline and CTA */}
        <div className="max-w-2xl w-full flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111] mb-4 leading-tight">
            Smarter. Faster.<br />Business banking.
          </h1>
          <p className="text-base md:text-lg text-[#444] mb-6">
            Earn up to <span className="text-[#2366d1] font-semibold">4.34%*</span> with same-hour liquidity, no hidden fees, and no minimums. Equate offers the highest-returning, lowest-risk treasury product. Period.
          </p>

          <form onSubmit={formik.handleSubmit} className="mt-8 w-full max-w-2xl">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex w-full py-2 rounded-xl border border-gray-200 bg-white overflow-hidden">
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Enter your work email"
                  className="flex-1 px-5 py-3 text-base bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="px-4 mr-2 bg-[#033175] text-white text-[14px] transition-colors duration-200 rounded-md"
                >
                  Get started
                </button>
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-sm text-red-500 px-2">{formik.errors.email}</div>
              )}
            </div>
          </form>
        </div>

        {/* Responsive Video */}
        <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden">
          <div className="relative aspect-video bg-[#f4f4f4]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/assets/business-banking/Equate.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              aria-label="Equate banking demo video"
            />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="w-full bg-[#f8f9fa] py-12">
        <div className="max-w-[1920px] mx-auto px-3 md:px-12">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm text-[#666] max-w-4xl mx-auto">
              Equate is a financial technology company, not a bank. Checking accounts and banking services provided by Column N.A., Member FDIC.
            </p>
          </div>

          {/* Trust Heading */}
          <div className="text-center mb-8">
            <h2 className="text-sm md:text-base font-medium text-[#888] tracking-wider uppercase">
              TRUSTED BY 1 IN EVERY 3 STARTUPS
            </h2>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 items-center justify-items-center">
            {/* HeyGen */}
            <div className="flex items-center justify-center h-8 md:h-10">
              <svg className="h-6 md:h-8 w-auto" viewBox="0 0 120 32" fill="none">
                <text x="0" y="24" className="fill-[#333] text-lg md:text-xl font-semibold">HeyGen</text>
              </svg>
            </div>

            {/* Y Combinator */}
            <div className="flex items-center justify-center h-8 md:h-10">
              <div className="bg-[#ff6600] w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded">
                <span className="text-white font-bold text-sm md:text-base">Y</span>
              </div>
              <span className="ml-2 text-[#333] font-medium text-sm md:text-base">Combinator</span>
            </div>

            {/* Cursor */}
            <div className="flex items-center justify-center h-8 md:h-10">
              <svg className="h-6 md:h-8 w-auto" viewBox="0 0 100 32" fill="none">
                <text x="0" y="24" className="fill-[#333] text-lg md:text-xl font-medium">CURSOR</text>
              </svg>
            </div>

            {/* Superhuman */}
            <div className="flex items-center justify-center h-8 md:h-10">
              <span className="text-[#333] font-light text-lg md:text-xl tracking-wider">SUPERHUMAN</span>
            </div>

            {/* Anthropic */}
            <div className="flex items-center justify-center h-8 md:h-10">
              <span className="text-[#333] font-medium text-lg md:text-xl">ANTHROPIC</span>
            </div>

            {/* Built */}
            <div className="flex items-center justify-center h-8 md:h-10">
              <span className="text-[#333] font-bold text-lg md:text-xl">BUILT</span>
              <div className="ml-1 w-2 h-2 md:w-3 md:h-3 bg-[#333] rounded-sm"></div>
            </div>

            {/* Solana */}
            <div className="flex items-center justify-center h-8 md:h-10 col-span-2 sm:col-span-1">
              <div className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#9945ff] via-[#14f195] to-[#9945ff] rounded-full mr-2"></div>
                <span className="text-[#333] font-medium text-lg md:text-xl">SOLANA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
