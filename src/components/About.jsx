function About() {
  return (
    <section className="pt-20 bg-white">
      {/* Banner */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src="/about-banner.jpg"
          alt="SONALITE Construction Chemicals"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0B2A4A]/65"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
          <div>
            <p className="text-[#FC8019] font-semibold uppercase tracking-widest">
              SONALITE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              About Us
            </h1>

            <p className="text-white/80 mt-3">
              Construction Chemical Solutions
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* About */}
          <div className="lg:col-span-2">
            <p className="text-[#FC8019] font-semibold uppercase tracking-widest">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
              SONALITE Construction Chemicals
            </h2>

            <div className="w-16 h-1 bg-[#FC8019] mt-5"></div>

            <p className="text-gray-700 leading-8 mt-7">
              SONALITE Construction Chemicals is focused on providing practical
              and reliable construction chemical solutions for modern
              construction requirements.
            </p>

            <p className="text-gray-700 leading-8 mt-5">
              As a company associated with{" "}
              <span className="font-semibold text-[#0B2A4A]">
                Suyash Enterprises
              </span>
              , SONALITE offers products for tile installation, block joining,
              floor hardening and micro concrete applications.
            </p>

            <p className="text-gray-700 leading-8 mt-5">
              Our focus is on delivering practical product solutions that
              support builders, contractors and customers in their construction
              requirements.
            </p>
          </div>

          {/* Products */}
          <div className="border-l-4 border-[#FC8019] pl-7">
            <h3 className="text-2xl font-bold text-[#0B2A4A]">Our Products</h3>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>Block Joining Mortar</p>
              <p>Tile Adhesive</p>
              <p>Floor Hardener</p>
              <p>Micro Concrete</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="border border-gray-200 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#0B2A4A]">Our Mission</h3>

            <p className="text-gray-700 leading-7 mt-4">
              To provide practical construction chemical solutions that support
              quality, efficiency and reliable construction work.
            </p>
          </div>

          <div className="bg-[#0B2A4A] p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>

            <p className="text-white/80 leading-7 mt-4">
              To build a trusted construction chemical brand by delivering
              dependable products and solutions for evolving construction needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
