function Footer() {
  return (
    <footer className="bg-[#061A2F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">SONALITE</h2>

            <p className="text-gray-300 mt-4 leading-relaxed max-w-sm">
              Construction chemical solutions designed to support stronger,
              durable and reliable construction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="flex flex-col gap-3 mt-5">
              <a
                href="/"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                Home
              </a>

              <a
                href="/products"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                Products
              </a>

              <a
                href="/#about"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold">Our Products</h3>

            <div className="flex flex-col gap-3 mt-5">
              <a
                href="/products/tile-adhesives"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                Tile Adhesives
              </a>

              <a
                href="/products/block-joining-mortar"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                Block Joining Mortar
              </a>

              <a
                href="/products/micro-concrete"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                Micro Concrete
              </a>

              <a
                href="/products/floor-hardeners"
                className="text-gray-300 hover:text-[#FC8019] transition"
              >
                Floor Hardeners
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 SONALITE Construction Chemicals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
