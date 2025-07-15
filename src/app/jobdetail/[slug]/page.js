import { initialData } from '@/data/jobs';
import JobDetailPage from '@/maps/JobDetail/JobDetailPage';

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

const getJobBySlug = (slug) => {
  for (const dept of initialData) {
    for (const job of dept.jobs) {
      if (slugify(job.title) === slug) {
        return job;
      }
    }
  }
  return null;
};

export default function JobPage({ params }) {
    console.log('JobPage rendered with params:', params); 

  const job = getJobBySlug(params.slug);

  if (!job) {
    return <div className="p-8 text-gray-600">Job not found.</div>;
  }

  const layout = [
    {
      id: 'job-detail',
      component: 'JobDetail',
      visible: true,
      props: {
        title: job.title,
        location: job.location,
        description: job.description,
        requirements: job.requirements,
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <JobDetailPage layout={layout} />
    </div>
  );
}
