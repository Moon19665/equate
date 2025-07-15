export default function CEOQuoteSection() {
    return (
      <section className="bg-[#f4f4f9] w-full py-16 ">
        <div className="max-w-[1920px] mx-auto px-3 md:px-12 flex flex-col md:flex-row items-center justify-center text-center">
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
  
        
        </div>
      </section>
    );
  }
  