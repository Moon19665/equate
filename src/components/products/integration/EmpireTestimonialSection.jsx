export default function EmpireTestimonialSection() {
    return (
      <section className="w-full bg-[#f7f7fa] py-16 px-3 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="https://brand.brex.com/transform/7edc34df-e397-4783-9200-0ae1c49f3fd6/empire-group-logo?io=transform:fit,width:2000,height:1515&quality=95"
            alt="Empire Portfolio Group Logo"
            className="mx-auto mb-6 h-12"
            style={{ objectFit: 'contain' }}
          />
          <blockquote className="text-2xl md:text-3xl text-gray-800 font-serif mb-8 leading-relaxed">
            “It’s essential for our financial solution to integrate with the tools we already use. This level of transparency from finance is valuable to our executive team and allows us to make better decisions, faster.”
          </blockquote>
          <div className="text-gray-600 text-base">
            — <a href="#" className="underline hover:text-gray-800">Tiffany Miller</a>, Director, Accounts Payable, Empire Portfolio Group
          </div>
        </div>
      </section>
    );
  }
  