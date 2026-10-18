import { useParams } from "react-router-dom";
import products from "../data/product";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#0B2A4A]">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-16 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg h-[500px] object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-[#FC8019] font-bold uppercase tracking-wide">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2A4A] mt-3">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Packaging */}
            <div className="mt-6">
              <p className="text-gray-500 font-semibold">Packaging</p>

              <p className="text-xl font-bold text-[#0B2A4A] mt-1">
                {product.packaging}
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#0B2A4A]">
                Key Features
              </h2>

              <div className="mt-4 space-y-3">
                {product.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#FC8019] font-bold">✓</span>

                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquire Button */}
            <button className="mt-8 w-fit bg-[#FC8019] text-white px-7 py-3 rounded-lg font-bold hover:bg-[#e66f0f] transition">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold text-[#0B2A4A]">Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {product.applications?.map((application, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <div className="flex gap-3">
                  <span className="text-[#FC8019] font-bold">→</span>

                  <p className="text-gray-700">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
