import Navbar from './components/navbar/Navbar';
import './App.css'
import Hero from './components/hero/Hero';
import Rating from './components/rating/Rating';
import GetStarted from './components/getStarted/GetStarted';
import Pricing from './components/Pricing/pricing';
import Workflow from './components/workflow/Workflow';
import Footer from './components/footer/Footer';
import PremiumTools from './components/premiumComponents/PremiumTools';
import { Suspense } from 'react';

const fetchPromise = async () => {
    const res = await fetch("data.json");
    return res.json();
}

const toolPromise = fetchPromise();

function App() {
 
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <Rating ></Rating>
   <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
     <PremiumTools toolPromise={toolPromise}></PremiumTools>
   </Suspense>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <Workflow></Workflow>
   <Footer></Footer>
  
   </>
  )
}

export default App
