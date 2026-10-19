function Contact() {
  return (
    <section className="pt-20 bg-white">
      {/* Banner */}
      <div className="relative py-16 px-6 overflow-hidden">
        {/* Background Image */}
        <img
          src="/contact-banner.jpg"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0B2A4A]/75"></div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <p
            className="text-[#FC8019] font-semibold uppercase tracking-widest
                       animate-[fadeIn_1s_ease-out]"
          >
            SONALITE
          </p>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-2
                       animate-[slideUp_0.8s_ease-out]"
          >
            Contact Us
          </h1>

          <p
            className="text-white/80 mt-3
                       animate-[slideUp_1s_ease-out]"
          >
            We are here to assist you with your construction requirements.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-[#FC8019] font-semibold uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A4A] mt-3">
            SONALITE Construction Chemicals
          </h2>

          <div className="w-16 h-1 bg-[#FC8019] mt-5"></div>

          <p className="text-gray-600 leading-7 mt-6">
            For product enquiries and construction chemical requirements,
            contact our team.
          </p>

          {/* Phone */}
          <div
            className="mt-10 border-t border-gray-200 pt-6
                       transition-all duration-500
                       hover:translate-x-2"
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Phone Number
            </p>

            <a
              href="tel:+919765226444"
              className="inline-block text-xl font-semibold text-[#0B2A4A] mt-2
                         hover:text-[#FC8019] transition-colors duration-300"
            >
              +91 9765226444
            </a>
          </div>

          {/* Company */}
          <div
            className="mt-6 border-t border-gray-200 pt-6
                       transition-all duration-500
                       hover:translate-x-2"
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Company
            </p>

            <p className="text-lg text-[#0B2A4A] mt-2">
              SONALITE Construction Chemicals
            </p>

            <p className="text-gray-500 mt-1">A Suyash Enterprises Company</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
