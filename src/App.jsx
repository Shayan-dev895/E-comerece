import { Routes ,Route} from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SingleProduct from "./Pages/SingleProduct";
import Signup from "./Firebase/singnup";
import Signin  from "./Firebase/Signin";

function App(){
  return(
    <>
  <Nav/>
 
    <Routes> 
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
     <Footer/>

    </>
  )
}
export default App;