import Navbar from './components/navbar/Navbar';
import './App.css'
import Hero from './components/hero/Hero';
import Rating from './components/rating/Rating';
import GetStarted from './components/getStarted/GetStarted';
import Pricing from './components/Pricing/pricing';
import Workflow from './components/workflow/Workflow';
import Footer from './components/footer/Footer';
import PremiumTools from './components/premiumComponents/PremiumTools';
import { Suspense,useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchPromise = async () => {
    const res = await fetch("data.json");
    return res.json();
}

const toolPromise = fetchPromise();


function App() {
  const [cart, setCart] = useState([]);
  const [tab, setTab] = useState("products");

  const handleBuy = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success("Product added to cart!",{autoClose: 2000});
    } else {
      toast.error("Product already added to cart!",{autoClose: 2000});
    }
  }


 
  return (
   <>
   <Navbar cartCount={cart.length} setTab={setTab}></Navbar>
   <Hero></Hero>
   <Rating ></Rating>
   <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
     <PremiumTools toolPromise={toolPromise} handleBuy={handleBuy} cart={cart} setCart={setCart} tab={tab} setTab={setTab}></PremiumTools>
   </Suspense>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <Workflow></Workflow>
   <Footer></Footer>
   <ToastContainer position="top-right" autoClose={2000} />
   </>
  )
}

export default App
