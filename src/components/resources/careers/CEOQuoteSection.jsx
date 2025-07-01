export default function CEOQuoteSection() {
    return (
      <section className="bg-[#f4f4f9] w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-6">
              “Approach life with a curious mind — your potential isn't limited by the qualities you have today. Surround yourself with those who make you grow.”
            </blockquote>
            <p className="text-sm text-gray-600 mb-4">Pedro Franceschi, Co-founder and CEO</p>
            <a
              href="#"
              className="text-orange-600 font-medium text-sm hover:underline inline-flex items-center gap-1"
            >
              Read more insights from Pedro
              <span className="inline-block transform translate-y-[1px]">&rarr;</span>
            </a>
          </div>
  
          {/* Image Section */}
          <div className="md:w-1/2 relative flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500" style={{ backgroundImage: 'url(https://brand.brex.com/transform/1a68f4a0-d375-4a30-8150-cfd891642db0/Pedro-Headshot-Careers-1?io=transform:fit,width:2500,height:2500&quality=95)', backgroundSize: 'cover', borderRadius: '9999px' }}></div>
              <img
                src="https://brand.brex.com/transform/1a68f4a0-d375-4a30-8150-cfd891642db0/Pedro-Headshot-Careers-1?io=transform:fit,width:2500,height:2500&quality=95"
                alt="Pedro Franceschi"
                className="rounded-full w-full h-full object-cover border-4 border-white z-10 relative"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  