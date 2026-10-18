import products from "../data/product";

export default function ProductSection() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section id="products" className="pt-32 pb-16 px-6 bg-white">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#FC8019] font-bold uppercase tracking-wide">
          Our Products
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#0B2A4A] mt-2">
          Construction Chemical Solutions
        </h2>

        <p className="text-gray-600 mt-4">
          Explore our range of construction chemical products.
        </p>
      </div>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {categories.map((category) => {

          const categoryProduct = products.find(
            (product) => product.category === category
          );

          const categoryUrl = category
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <div
              key={category}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden bg-gray-100">
                <img
                  src={categoryProduct.image}
                  alt={category}
                  className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-[#0B2A4A]">
                  {category}
                </h3>

                <p className="text-gray-600 mt-3">
                  Explore our {category.toLowerCase()} products and
                  construction solutions.
                </p>

                {/* Explore */}
                <a
                  href={`/products/${categoryUrl}`}
                  className="inline-block mt-5 bg-[#FC8019] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#e66f0f] transition-colors duration-300"
                >
                  Explore →
                </a>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}