
import './App.css';
import Branding from './Components/Branding/Branding';
import Header from './Components/Header/Header';
import ThreeCardSection from './Components/Three-Card-Section/Three-Card-Section';
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import LatestWork from './Components/Latest-Work/Latest-Work'; 
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
function App() {
  return (
     <div className='main'>
   <Header/>
   <HomeBanner/>
   <Branding/>
   <ThreeCardSection/>
   <LatestWork/>
   <Testimonial/>
   <Footer/>
   </div>
  );
}

export default App;
