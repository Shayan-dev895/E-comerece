function CarouselSkeleton () {
  return (
    <div className="w-full bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] pt-6 pb-2 md:py-10 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between h-137.5 md:h-92.5 gap-8">
        <div className="flex-1 space-y-6">
          <div className="h-3 bg-gray-600 rounded w-1/4"></div>
          <div className="h-12 bg-gray-600 rounded w-3/4"></div>
          <div className="h-20 bg-gray-600 rounded w-full"></div>
          <div className="h-10 bg-gray-600 rounded-full w-32"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-56 h-56 md:w-80 md:h-80 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
export default CarouselSkeleton;