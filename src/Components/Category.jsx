import { useSelector, useDispatch } from "react-redux";
import { selectCategories, setCategory } from "../Redux/ProductSlice";

function Category() {
  const categories = useSelector(selectCategories);
  const selected = useSelector((state) => state.Product.selectedCategory);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#101829] py-3">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex items-center overflow-x-auto sm:overflow-x-visible gap-2 sm:gap-4 sm:flex-wrap sm:justify-evenly no-scrollbar">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => dispatch(setCategory(item))}
              className={`
                shrink-0 px-4 py-2 text-[10px] sm:text-sm rounded-md uppercase text-white transition-all font-medium   bg-linear-to-r from-pink-500 to-purple-600
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollbar chupane ke liye */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Category;
