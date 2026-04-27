import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../Redux/Productslice";
import FilterProduct from "../Components/Filterproducts";
import Productcard from "../Components/Productcard";
import { ListFilter, X } from "lucide-react";

function Product() {
    const data = useSelector((state) => state.Product?.electronics ?? []);
    const dispatch = useDispatch();

    // safe price calculation
    const prices = data?.map(item => item.price) || [];
    const minPrice = prices.length ? Math.min(...prices) : 0;
    const maxPrice = prices.length ? Math.max(...prices) : 0;

    const [search, setsearch] = useState("");
    const [category, setcategory] = useState("ALL");
    const [brand, setbrand] = useState("ALL");
    const [range, setrange] = useState(3000);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const itemsPerPage = 8;

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const handlecategory = (e) => {
        setcategory(e.target.value);
        setCurrentPage(1);
    };

    const handlebrand = (e) => {
        setbrand(e.target.value);
        setCurrentPage(1);
    };

    // SAFE FILTER
  const filterdata = useMemo(() => {
  return data.filter((item) =>
    item?.title?.toLowerCase().includes(search.toLowerCase().trim()) &&
    (category === "ALL" || item.category === category) &&
    (brand === "ALL" || item.brand === brand) &&
    item.price <= range
  );
}, [data, search, category, brand, range]);

    // pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterdata.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filterdata.length / itemsPerPage);

    // reset page on filter change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, category, brand, range]);

    return (
        <div className="w-full relative">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 mb-10">

                {/* Mobile Filter Button */}
                <div className="md:hidden flex justify-between items-center py-4">
                    <h2 className="font-bold text-lg">Products</h2>
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
                    >
                        <ListFilter size={18} /> Filters
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-10">

                    {/* FILTER DRAWER */}
                    <div className={`
                        fixed inset-0 z-50 bg-black/50 transition-opacity md:static md:bg-transparent
                        ${isFilterOpen ? "visible opacity-100" : "invisible opacity-0 md:visible md:opacity-100"}
                    `}
                        onClick={() => setIsFilterOpen(false)}
                    >
                        <div className={`
                            w-72 h-full bg-white p-4 overflow-y-auto transition-transform duration-300 md:w-64 md:translate-x-0
                            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
                        `}
                            onClick={(e) => e.stopPropagation()}
                        >

                            {/* mobile header */}
                            <div className="flex justify-between items-center md:hidden mb-4">
                                <span className="font-bold text-xl">Filters</span>
                                <button onClick={() => setIsFilterOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <FilterProduct
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                search={search}
                                setsearch={setsearch}
                                category={category}
                                brand={brand}
                                range={range}
                                setrange={setrange}
                                handlecategory={handlecategory}
                                handlebrand={handlebrand}
                            />
                        </div>
                    </div>

                    {/* PRODUCTS */}
                    <div className="flex flex-col w-full">

                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-7 md:mt-10">

                            {currentItems.length > 0 ? (
                                currentItems.map((item) => (
                                    <Productcard
                                        item={item}
                                        key={item.id || item._id}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 text-gray-500">
                                    No products found
                                </div>
                            )}

                        </div>

                        {/* PAGINATION */}
                        {currentItems.length > 0 && totalPages > 1 && (
                            <div className="flex flex-wrap justify-center gap-1 mt-10 items-center">

                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    className="px-2 py-1 bg-gray-200 text-xs rounded disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`px-3 py-1 text-xs rounded border ${currentPage === i + 1
                                            ? "bg-red-600 text-white"
                                            : "bg-white"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className="px-2 py-1 bg-gray-200 text-xs rounded disabled:opacity-50"
                                >
                                    Next
                                </button>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;