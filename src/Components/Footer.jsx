import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";

 function Footer() {
  return (
    <footer className="bg-[#0b1a2b] text-gray-300 pt-12 pb-6 px-6 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Logo + Info */}
        <div>
          <h2 className="text-2xl font-bold  mb-4"><span className="text-red-500 ">Z</span>-Electro</h2>
          <p className="text-sm mb-4">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="text-sm">123 Electronics St, Style City, NY 10001</p>
          <p className="text-sm">Email: support@Z-electro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">
              Order Tracking
            </li>
            <li className="hover:text-white cursor-pointer">Size Guide</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold px-2.5 text-white mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
        <FaFacebook className="hover:text-white cursor-pointer"/>
        <FaInstagram className="hover:text-white cursor-pointer"/>
        <FaTwitter className="hover:text-white cursor-pointer"/>
        <FaPinterest className="hover:text-white cursor-pointer"/>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and more
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 rounded-l-md bg-[#13263d] text-sm outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-md text-white text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 <span className="font-bold text-red-500 ">Z</span>-Electro. All rights reserved
      </div>
    </footer>
  );
}
export default Footer