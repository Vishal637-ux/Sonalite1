export default function Shimmer() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-64 h-10 bg-gray-300 rounded mx-auto"></div>
          <div className="w-80 h-5 bg-gray-200 rounded mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="w-full h-64 bg-gray-300"></div>

              <div className="p-6">
                <div className="w-40 h-6 bg-gray-300 rounded"></div>

                <div className="w-full h-5 bg-gray-200 rounded mt-4"></div>
                <div className="w-4/5 h-5 bg-gray-200 rounded mt-2"></div>

                <div className="w-32 h-10 bg-gray-300 rounded mt-5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
