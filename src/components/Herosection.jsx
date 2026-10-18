import { useEffect, useState } from "react";

function HeroSection() {
  const images = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
    "/hero5.png",
    "/hero6.png",
    "/hero7.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[500px] md:min-h-[600px] px-6 md:px-16">
        <div className="w-full max-w-4xl space-y-1 pb-10">
          {/* Brand Tagline */}
          <p className="text-[#FC8019] text-xl font-bold mb-4">
            SONALITE CONSTRUCTION CHEMICALS
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Strong Solutions for Stronger Construction
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mt-5">
            High-quality construction chemical solutions designed for stronger,
            durable and reliable construction.
          </p>

          {/* CTA Buttons */}
          <div>
            <a
              href="#products"
              className="inline-block mt-7 bg-[#FC8019] text-white px-7 py-3 rounded-lg font-bold shadow-lg hover:bg-[#e66f0f] hover:-translate-y-1 transition-all duration-300"
            >
              Explore Products
            </a>

            <a
              href="#about"
              className="inline-block mt-7 ml-4 border-2 border-white text-white px-7 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
