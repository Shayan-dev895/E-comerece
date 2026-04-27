import { useNavigate } from "react-router";

function Breadcrums({ title }) {
    const navigate = useNavigate();
    
    return (
        <>
            {/* max-w-6xl mx-auto se ye center rahega aur px-4 se edges se space milega */}
            <div className="mt-6 mb-4 md:my-10 max-w-6xl mx-auto px-4">
                
                {/* px-20 hatakar responsive padding lagayi hai.
                   text-xs mobile ke liye aur md:text-xl desktop ke liye.
                   flex-wrap lagaya hai taake agar title bada ho toh next line mein aa jaye.
                */}
                <h1 className="text-sm md:text-xl text-gray-500 flex flex-wrap items-center gap-1">
                    <span 
                        className="cursor-pointer hover:text-red-600 transition-colors" 
                        onClick={() => navigate('/')}
                    >
                        Home
                    </span>
                    
                    <span className="text-gray-400">/</span>
                    
                    <span 
                        className="cursor-pointer hover:text-red-600 transition-colors whitespace-nowrap" 
                        onClick={() => navigate('/product')}
                    >
                        Products
                    </span>
                    
                    <span className="text-gray-400">/</span>
                    
                    {/* Title agar bahut bada hai toh mobile par "truncate" ho jayega ya properly wrap hoga */}
                    <span className="text-gray-800 font-medium truncate max-w-37.5 md:max-w-none">
                        {title}
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Breadcrums;