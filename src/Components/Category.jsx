import { useSelector, useDispatch } from "react-redux";
import { selectCategories, setCategory } from "../redux/ProductSlice";

function Category() {
  const categories = useSelector(selectCategories);
  const selected = useSelector((state) => state.Product.selectedCategory);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#101829] h-13">
      <div className="max-w-7xl mx-auto py-1.5 flex gap-4 items-center justify-evenly">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(item))}
            className={`px-3 py-2 rounded-md uppercase text-white transition-all cursor-pointer
              ${selected === item
                ? "bg-green-500 scale-105"
                : "bg-linear-to-r from-pink-500 to-purple-600"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;