function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to <span className="font-semibold text-black">Z-Store</span>,
          your trusted online shopping destination. We bring you high-quality
          products at affordable prices with a smooth and secure shopping experience.
        </p>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Our goal is to make online shopping simple, fast, and reliable.
          We focus on customer satisfaction, fast delivery, and 24/7 support.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 sm:mt-12">

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              🚀 Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We ensure quick and safe delivery to your doorstep.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              💳 Secure Payment
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              100% secure payment system for safe transactions.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              🎧 24/7 Support
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our team is always ready to help you anytime.
            </p>
          </div>

        </div>

        

      </div>
    </div>
  );
}

export default About;