import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#0b1a2b] text-gray-300 pt-10 sm:pt-12 pb-6 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* Logo + Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            <span className="text-red-500">Z</span>-Electro
          </h2>

          <p className="text-sm mb-4">
            Powering Your World with the Best in Electronics.
          </p>

          <p className="text-sm">123 Electronics St, Style City, NY 10001</p>
          <p className="text-sm">Email: support@Z-electro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Order Tracking</li>
            <li className="hover:text-white cursor-pointer">Size Guide</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaPinterest className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
            Stay in the Loop
          </h3>

          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and more
          </p>

          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="text-black w-full px-3 py-2 rounded-md sm:rounded-r-none sm:rounded-l-md bg-[#13263d] text-sm outline-none"
            />

            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 mt-2 sm:mt-0 sm:rounded-r-md text-white text-sm">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs sm:text-sm">
        © 2026 <span className="font-bold text-red-500">Z</span>-Electro. All rights reserved
      </div>

    </footer>
  );
}

export default Footer;