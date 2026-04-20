import { useSelector } from "react-redux";
import { selectBrands, selectCategories } from "../redux/ProductSlice";


function FilterProduct({ minPrice,maxPrice,search, setsearch, category, handlecategory, handlebrand, brand, range, setrange }) {
    const select = useSelector(selectCategories)
    const selectbrand = useSelector(selectBrands)


    console.log(selectbrand)
    return (
        <div className="bg-gray-100 h-max mt-10 p-4 rounded-md">
            {/* Filter product */}
            <input type="text" placeholder="Search..." value={search} onChange={(event) => setsearch(event.target.value)} className="bg-amber-200 text-black border rounded-md p-2 border-gray-400" />
            {/* Category Section */}
            <h1 className="text-xl  font-semibold mt-5">Category</h1>
            <div className="flex flex-col gap-2 mt-3">
                {
                    select?.map((item, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <input type="checkbox" id={item} checked={category === item} value={item} onChange={handlecategory} />
                            <label htmlFor={item} className="cursor-pointer">
                                {item}
                            </label>
                        </div>



                    ))
                }

            </div>
            {/* Brand */}
            <h1 className="text-xl  font-semibold mt-2 mb-2" >Brands</h1>
            <select onChange={handlebrand} value={brand} name="" id="" className="bg-white p-1 w-full border-gray-200 border-2 rounded-md">{
                selectbrand.map((item, index) => (
                    <option key={index} value={item} >{item.toUpperCase()}</option>
                ))
            }
            </select>
            {/* Price Range */}
            <h1 className="text-xl  font-semibold mt-2 mb-2">Price Range</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Price Range:$0 - ${range}</label>
                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={range}
                    onChange={(e) => setrange(+e.target.value)}
                />
            </div>
            <button className="bg-red-500 text-white rounded-md px-2 py-1 mt-5 cursor-pointer">Reset Filters</button>
        </div>
    )
}
export default FilterProduct;