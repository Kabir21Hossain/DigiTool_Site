import Navbar from './components/navbar/Navbar';
import './App.css'
import Hero from './components/hero/Hero';
import Rating from './components/rating/Rating';
import GetStarted from './components/getStarted/GetStarted';
import Pricing from './components/Pricing/pricing';
import Workflow from './components/workflow/Workflow';
import Footer from './components/footer/Footer';

function App() {

  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <Rating ></Rating>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <Workflow></Workflow>
   <Footer></Footer>
  
   </>
  )
}

export default App
