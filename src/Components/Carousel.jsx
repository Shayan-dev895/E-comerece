
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/ProductSlice";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Category from "./Category";

function Carousel() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Product.electronics);
    console.log(data)

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    return (
        <>
        <div className="w-full relative bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-10 overflow-hidden">

            <div className="max-w-7xl mx-auto relative px-5">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}

                    className="h-100 relative group"
                >
                    {data?.slice(3, 10).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-between h-full w-full px-10 md:px-16">

                                {/* LEFT CONTENT */}
                                <div className="flex-1 text-white max-w-xl">

                                    <p className="text-red-500 text-xs tracking-[4px] uppercase mb-3 font-semibold">
                                        Powering Your World with the Best in Electronics.
                                    </p>

                                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase mb-4">
                                        {item.title}
                                    </h1>

                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 opacity-90">
                                        {item.description}
                                    </p>

                                    <button className="bg-linear-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-bold uppercase rounded-md shadow-lg hover:scale-105 transition-all">
                                        Shop Now
                                    </button>
                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="flex-1 flex justify-center items-center relative">

                                    <div className="w-75 h-75 md:w-87.5 md:h-87.5 bg-white rounded-full flex items-center justify-center hover:scale-105 shadow-2xl shadow-red-400 ">

                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-[70%] h-[70%] object-contain"
                                        />

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation Button Styling  */}
                     <style dangerouslySetInnerHTML={{
                        __html: `

/* ARROWS */
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  background: #ef4444;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
}

/* arrow icon */
.mySwiper .swiper-button-next::after,
.mySwiper .swiper-button-prev::after {
  font-size: 14px;
  font-weight: 900;
}

/* hover */
.mySwiper .swiper-button-next:hover,
.mySwiper .swiper-button-prev:hover {
  background: white;
  color: #ef4444;
}

/* position */
.mySwiper .swiper-button-prev {
  left: 15px;
}
.mySwiper .swiper-button-next {
  right: 15px;
}

/* 🔘 PAGINATION */
.mySwiper .swiper-pagination {
  bottom: 15px !important;
}

/* bullets */
.mySwiper .swiper-pagination-bullet {
  background: #ffffff80;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  transition: all 0.3s ease;
}

/* active */
.mySwiper .swiper-pagination-bullet-active {
  background: #ef4444;
  width: 26px;
  border-radius: 999px;
}

                `}}         />
        </div>
        <Category/>
        </>

        
    );
}

export default Carousel;