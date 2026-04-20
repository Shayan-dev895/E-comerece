import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/ProductSlice";
import FilterProduct from "../Components/Filterproducts";
import Productcard from "../Components/Productcard";


function Product() {
    const data = useSelector((state) => state.Product.electronics)
    const prices = data.map(item => item.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)
    const dispatch = useDispatch()
    const [search, setsearch] = useState("")
    const [category, setcategory] = useState("ALL")
    const [brand, setbrand] = useState("ALL")
    const [range, setrange] = useState(3000)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
console.log(data)
    useEffect(() => {
        dispatch(fetchproducts())
    }, [])

    const handlecategory = (e) => {
        setcategory(e.target.value)
        setCurrentPage(1); // Reset to page 1 on filter change
    }
    const handlebrand = (e) => {
        setbrand(e.target.value)
        setCurrentPage(1); // Reset to page 1 on filter change
    }

    const filterdata = data?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase().trim()) &&
        (category === "ALL" || item.category === category) &&
        (brand === "ALL" || item.brand === brand) &&
        item.price >= 0 && item.price <= range
    );

    // --- PAGINATION LOGIC START ---
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    const currentItems = filterdata?.slice(indexOfFirstItem, indexOfLastItem) || [];
    const totalPages = Math.ceil((filterdata?.length || 0) / itemsPerPage);
    // --- PAGINATION LOGIC END ---

    return (
        <div>
            <div className=" max-w-6xl mx-auto px-4 mb-10">
                {
                    filterdata?.length > 0 ?
                        <div className="flex gap-10">
                            <FilterProduct minPrice={minPrice} maxPrice={maxPrice} search={search} setsearch={(e) => {setsearch(e); setCurrentPage(1)}} category={category} brand={brand} range={range} setrange={setrange} handlecategory={handlecategory} handlebrand={handlebrand} />
                            
                            <div className="flex flex-col w-full">
                                <div className="grid grid-cols-4 gap-7 mt-10">
                                    {/* Yahan filterdata ki jagah currentItems use kiya hai */}
                                    {
                                        currentItems.map((item, index) => (
                                            <Productcard item={item} key={index} />
                                        ))
                                    }
                                </div>

                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center gap-2 mt-10 items-center">
                                        <button 
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage(prev => prev - 1)}
                                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                                        >
                                            Prev
                                        </button>

                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentPage(i + 1)}
                                                className={`px-3 py-1 rounded border ${currentPage === i + 1 ? "bg-red-600 text-white" : "bg-white"}`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}

                                        <button 
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage(prev => prev + 1)}
                                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        : <div className="mt-10 text-center w-full">No products found</div>
                }
            </div>
        </div>
    )
}
export default Product;