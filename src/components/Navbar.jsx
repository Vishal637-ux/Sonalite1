import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/sonalite-logo.png"
              alt="Sonalite Construction Chemicals"
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="font-semibold text-[#0B2A4A] hover:text-[#FC8019] transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="font-semibold text-[#0B2A4A] hover:text-[#FC8019] transition-colors duration-200"
            >
              Products
            </Link>

            <Link
              to="/about"
              className="font-semibold text-[#0B2A4A] hover:text-[#FC8019] transition-colors duration-200"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="bg-[#FC8019] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#e66f0f] transition-all duration-200 shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              to="/products"
              className="text-sm font-semibold text-[#0B2A4A]"
            >
              Products
            </Link>

            <Link to="/about" className="text-sm font-semibold text-[#0B2A4A]">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
