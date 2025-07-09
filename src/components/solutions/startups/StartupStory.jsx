export default function StartupStory() {
    return (
      <section className="w-full py-16 px-4 flex flex-col items-center bg-white">
        {/* Logo */}
        <img
          src="/assets/startups/scale-logo.webp"
          alt="Scale AI Logo"
          className="h-10 md:h-12 mb-8"
          style={{ objectFit: "contain" }}
        />
  
        {/* Quote */}
        <blockquote className="max-w-3xl text-center">
          <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug md:leading-normal mb-8">
            “We've been with Equate since our early startup days. <br className="hidden md:inline" />
            They've helped us grow from a few employees to over 700, and have grown with us."
          </p>
          <footer className="text-gray-500 text-base md:text-lg">
            —{" "}
            <a
              href="https://scale.com/about"
              className="underline hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alexandr Wang
            </a>
            , founder and CEO, Scale AI
          </footer>
        </blockquote>
      </section>
    );
  }
  