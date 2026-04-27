
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      

      {/* Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-3 text-sm sm:text-base">
          We are here to help you anytime 🚀
        </p>

        {/* Card */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 sm:p-10">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email Row (responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black"
                required
              />

            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;