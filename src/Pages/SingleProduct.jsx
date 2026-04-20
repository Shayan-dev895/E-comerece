import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProductById } from "../redux/ProductSlice";
import Breadcrums from "./Breadcrums";
import { IoCartOutline } from "react-icons/io5";

function SingleProduct() {
    const params = useParams()
    const selectproduct = useSelector((state) => selectProductById(state, params.id))
    const orignalprice = selectproduct
        ? Math.round(
            selectproduct.price +
            (selectproduct.price * selectproduct.discountPercentage) / 100
        )
        : 0;

    console.log(orignalprice)
    return (
        <>
            {
                selectproduct ?
                    <div className=" px-auto pb-4 md:px-0">
                        <Breadcrums title={selectproduct.title} />
                        <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
                            {/* img */}
                            <div className=" w-full">
                                <img src={selectproduct.thumbnail}
                                    className="h-fit rounded-2xl w-full object-cover"
                                    alt="" />

                            </div>
                            {/* details */}
                            <div className="flex flex-col gap-6">
                                <h1 className="font-bold text-gray-600 md:text-3xl">{selectproduct.title}</h1>
                                <div><span>{selectproduct.brand?.toUpperCase()}</span>/<span>{selectproduct.category?.toUpperCase()}</span>/<span>{selectproduct.sku}</span></div>
                                <div className="font-bold cursor-pointer"> <span className="text-red-500">${Math.round(selectproduct.price)}</span> <span className="px-1 line-through">${orignalprice}</span> <span className="bg-red-500   p-2 rounded-4xl text-white">{selectproduct.discountPercentage}% discount</span></div>
                                <p>{selectproduct.description}</p>
                                <div>
                                    <button className="flex gap-1 cursor-pointer bg-red-500 rounded-xl p-2  text-white"><span ><IoCartOutline className="h-6 w-6"/></span>Add to Cart</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    : <div></div>
            }
        </>
    )
}
export default SingleProduct;