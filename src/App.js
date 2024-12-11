
import './App.css';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Work from './Pages/Work';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="*" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/work" element={<Work/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
