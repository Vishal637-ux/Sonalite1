function CompanyIntro() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left - Company Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/company-intro.jpg"
              alt="SONALITE Construction Chemicals"
              className="w-full h-[320px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
            />

            {/* Orange Accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FC8019]"></div>
          </div>

          {/* Right - Company Content */}
          <div>
            <p className="text-[#FC8019] font-bold uppercase tracking-widest">
              SONALITE CONSTRUCTION CHEMICALS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2A4A] mt-3">
              GET TO KNOW US
            </h2>

            <p className="text-[#0B2A4A] font-semibold text-xl mt-5">
              Construction Chemical Solutions
            </p>

            <p className="text-gray-500 mt-2">A Suyash Enterprises Company</p>

            <div className="mt-6 w-20 h-1 bg-[#FC8019]"></div>

            <p className="text-gray-700 text-lg leading-relaxed mt-7">
              SONALITE Construction Chemicals is focused on providing practical
              construction chemical solutions for modern construction
              requirements.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-5">
              Our product range includes solutions for tile installation, block
              joining, floor hardening and micro concrete applications.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-5">
              With a focus on reliable products and practical construction
              solutions, SONALITE aims to support builders, contractors and
              customers across different construction requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyIntro;
