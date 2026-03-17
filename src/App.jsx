import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header1 from './components/Header1.jsx'
import Footer1 from './components/Footer1.jsx'
import Footer2 from './components/Footer2.jsx'
import ClassesSection from './components/Contactus.jsx'
import ServicesSection from './components/Service.jsx'
import SpecialSection from './components/SpecialSection.jsx'
import AboutAutism from './pages/AboutAutism.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx' 
import ContactUs from './pages/ContactUs.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
  
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header1 />
        <Routes>
          <Route path="/" element={ <> <SpecialSection /> <ServicesSection /> <ClassesSection /> </> } />
          <Route path="/about-autism" element={<AboutAutism />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer1 />
        <Footer2 />
      </div>
    </Router>
  )
}

export default App
