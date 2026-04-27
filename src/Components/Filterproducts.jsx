import { useSelector } from "react-redux";
import { selectBrands, selectCategories } from "../redux/ProductSlice";

function FilterProduct({ minPrice, maxPrice, search, setsearch, category, handlecategory, handlebrand, brand, range, setrange }) {
    const select = useSelector(selectCategories)
    const selectbrand = useSelector(selectBrands)

    return (
        <div className="bg-gray-100 h-max p-4 rounded-md">
            <p className="font-bold">Filters</p>
            <hr className="my-2 border-gray-300" />
            
            <input 
                type="text" 
                placeholder="Search..." 
                value={search} 
                onChange={(event) => setsearch(event.target.value)} 
                className="w-full bg-white text-black border rounded-md p-2 border-gray-400 text-sm" 
            />

            <h1 className="text-base font-semibold mt-5">Category</h1>
            <div className="flex flex-col gap-2 mt-3 max-h-40 overflow-y-auto">
                {select?.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <input 
                            type="checkbox" 
                            id={item} 
                            checked={category === item} 
                            value={item} 
                            onChange={handlecategory} 
                            className="w-4 h-4 accent-red-600"
                        />
                        <label htmlFor={item} className="cursor-pointer text-sm truncate">
                            {item}
                        </label>
                    </div>
                ))}
            </div>

            <h1 className="text-base font-semibold mt-4 mb-2">Brands</h1>
            <select 
                onChange={handlebrand} 
                value={brand} 
                className="bg-white p-2 w-full border-gray-300 border rounded-md text-sm"
            >
                {selectbrand.map((item, index) => (
                    <option key={index} value={item}>{item.toUpperCase()}</option>
                ))}
            </select>

            <h1 className="text-base font-semibold mt-4 mb-2">Price Range</h1>
            <div className="flex flex-col gap-2">
                <label className="text-xs font-medium">Price: $0 - ${range}</label>
                <input
                    type="range"
                    min={minPrice || 0}
                    max={maxPrice || 3000}
                    value={range}
                    onChange={(e) => setrange(+e.target.value)}
                    className="w-full accent-red-600"
                />
            </div>
            
            <button className="bg-red-500 text-white w-full rounded-md py-2 mt-5 text-sm font-medium">
                Reset Filters
            </button>
        </div>
    )
}

export default FilterProduct;