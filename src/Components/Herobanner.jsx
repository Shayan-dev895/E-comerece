import { useNavigate } from "react-router-dom";

function HeroBanner() {
  const navigate = useNavigate();
  return (
    <div className="w-full px-6 py-10 bg-gray-200">
      
      {/* Container */}
      <div className=" max-w-6xl mx-auto rounded-2xl overflow-hidden">
        
        {/* Parallax Background */}
        <div
          className="h-100 bg-fixed bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage:
              "url('public/images/photo-1531297484001-80022131f5a1.avif')",
          }}
         >
         

          {/* Content */}
          <div className=" z-10 text-center text-white px-5">
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Next-Gen Electronics at Your Fingertips
            </h1>

            <p className="text-sm md:text-lg mb-6 text-white drop-shadow-lg">
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>

            <button onClick={() => navigate("/product")} className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md font-semibold transition-all">
              Shop Now
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}

export default HeroBanner;