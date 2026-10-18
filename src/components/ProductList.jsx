import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../data/product";
import Shimmer from "./Shimmer";

export default function ProductList() {
  const { category } = useParams();

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const selectedCategory = category
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory,
    );

    setProductData(filteredProducts);
  }, [category]);

  // Data loading
  if (productData === null) {
    return <Shimmer />;
  }

  // Category doesn't exist
  if (productData.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#0B2A4A]">No products found</h1>
      </section>
    );
  }

  return (
   <section className="pt-32 pb-16 px-6 bg-white min-h-screen"> 
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#FC8019] font-bold uppercase tracking-wide">
            Our Products
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2A4A] mt-2">
            {productData[0].category}
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            {productData.length} Products Available
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain"
                />
              </div>

              <div className="p-6">
                <p className="text-[#FC8019] text-sm font-bold uppercase">
                  {product.category}
                </p>

                <h2 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {product.name}
                </h2>

                <p className="text-gray-600 mt-3">{product.shortDescription}</p>

                <a
                  href={`/product/${product.id}`}
                  className="inline-block mt-5 bg-[#FC8019] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#e66f0f] transition-colors duration-300"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
