import React from 'react'

const SupportArticle = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 pb-10">
<h2 className="text-3xl font-bold text-center mb-10">Popular articles</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: 'How Brex credit limits work',
      desc: 'In order to give you the highest credit limit possible, our underwriting model relies on maintaining visibility into...',
    },
    {
      title: 'Bank statement underwriting',
      desc: 'Statement underwriting is an alternative way for us to underwrite your account limit if you cannot/choose not ...',
    },
    {
      title: 'Manage custom fields, accounting fields, and user fields',
      desc: 'We use accounting fields to capture additional expense details on your transactions prior to exporting to your...',
    },
    {
      title: 'Expense reimbursements',
      desc: 'If employees happen to spend on their personal cards, you can still leverage the comprehensive approval,...',
    },
    {
      title: 'Sage Intacct integration',
      desc: 'The Sage Intacct integration is one of our many accounting integrations that improve reporting accuracy...',
    },
    {
      title: 'Custom accounting',
      desc: 'By creating custom fields and values within Brex, including GL account, department, class, vendor, and...',
    },
  ].map((item, idx) => (
    <div key={idx} className="bg-[#f7f8fa] p-6 rounded-md">
      <h3 className="text-lg font-semibold text-[#111] mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
      <a href="#" className="text-orange-600 text-sm font-medium">
        Read article →
      </a>
    </div>
  ))}
</div>
</section>
    </div>
  )
}

export default SupportArticle
