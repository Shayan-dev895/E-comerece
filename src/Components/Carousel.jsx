import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/ProductSlice";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Category from "./Category";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "./CarouselSkeleton";

function Carousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.Product.electronics);
  const isLoading = status === "loading" || !data || data.length === 0;

  useEffect(() => {
    dispatch(fetchproducts());
  }, [dispatch]);
  if (isLoading) {
    return <CarouselSkeleton />;
  }

  return (
    <>
      <div className="w-full relative bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] pt-6 pb-2 md:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative px-4 md:px-10">
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="mySwiper h-137.5 md:h-92.5 relative"
          >
            {data?.slice(3, 10).map((item, index) => (
              <SwiperSlide key={index}>
                
                <div className="flex flex-col md:flex-row items-center md:items-center justify-start md:justify-between h-full w-full gap-8 md:gap-4 pt-6 md:pt-0 text-left">
                  
                  {/* LEFT: CONTENT SECTION */}
                  <div className="mx-10 w-full md:flex-1 text-white z-10">
                    <p className="text-red-500 text-[10px] md:text-xs font-bold uppercase mb-3 tracking-wider">
                      Powering Your World with the Best in Electronics
                    </p>
                    <h1 className="text-2xl md:text-5xl font-black leading-tight uppercase mb-4 tracking-tighter">
                      {item.title}
                    </h1>
                    <p className="text-gray-400 text-xs md:text-base leading-relaxed mb-6 opacity-80 max-w-md line-clamp-3">
                      {item.description}
                    </p>
                    <button
                      onClick={() => navigate("/product")}
                      className="bg-linear-to-r from-[#d11a5b] to-[#8c1ad1] px-8 py-3 text-xs md:text-sm font-bold uppercase rounded-full shadow-[0_0_20px_rgba(209,26,91,0.4)] hover:scale-105 transition-all active:scale-95"
                    >
                      Shop Now
                    </button>
                  </div>

                  {/* RIGHT: IMAGE SECTION with GLOW & SCALE */}
                  <div className="w-full md:flex-1 flex justify-center items-center relative">
                    {/* Background Glow Effect */}
                    <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-red-600/20 rounded-full blur-[80px]"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative group">
                      <div className="w-56 h-56 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center 
                                    shadow-[0_0_50px_rgba(255,0,0,0.3)]  
                                    transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,0,0,0.5)]">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-[70%] h-[70%] object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CUSTOM CSS FOR NAVIGATION & PAGINATION (As per Screenshot) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
/* Swiper Arrows Style */
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  
  width: 40px !important;
  height: 40px !important;
  border-radius: 4px !important;
  color: blue !important;
  transition: 0.3s;
}

.mySwiper .swiper-button-next:hover,
.mySwiper .swiper-button-prev:hover {

  transform: scale(1.1);
}

.mySwiper .swiper-button-next::after,
.mySwiper .swiper-button-prev::after {
  font-size: 16px !important;
  font-weight: bold;
}

/* Pagination (Red Line Style) */
.mySwiper .swiper-pagination {
  bottom: 10px !important;
}

.mySwiper .swiper-pagination-bullet {
  background: #555 !important;
  width: 12px !important;
  height: 12px !important;
  opacity: 1 !important;
  border: 2px solid transparent;
}

.mySwiper .swiper-pagination-bullet-active {
  background: #ff0000 !important;
  width: 35px !important;
  border-radius: 10px !important;
}

/* Hide arrows on very small screens for better UX */
@media (max-width: 480px) {
  .mySwiper .swiper-button-next,
  .mySwiper .swiper-button-prev {
    display: none !important;
  }
}
            `,
          }}
        />
      </div>

      <div className="relative z-10">
        <Category />
      </div>
    </>
  );
}

export default Carousel;