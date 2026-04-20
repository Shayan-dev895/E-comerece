import { useNavigate } from "react-router";

function Breadcrums({ title }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="my-10 max-w-6xl px-auto">
                <h1 className="px-20 text-xl text-gray-700"><span className=" cursor-pointer" onClick={() => navigate('/')}>Home</span>/<span className="cursor-pointer" onClick={() => navigate('/product')}>Products</span>/{title}</h1>

            </div>
        </>
    )
}
export default Breadcrums;