import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header1 from './components/Header1.jsx'
import Footer1 from './components/Footer1.jsx'
import ClassesSection from './components/Contactus.jsx'
import ServicesSection from './components/Service.jsx'
import SpecialSection from './components/SpecialSection.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import TherapistTeam from './components/TherapistTeam.jsx'
import Testimonials from './components/Testimonials.jsx'
import BlogSection from './components/BlogSection.jsx'
import AboutAutism from './pages/AboutAutism.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx' 
import ContactUs from './pages/ContactUs.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
import { OccupationalTherapyPage, SpeechTherapyPage, PhysiotherapyPage, SpecialEducationPage } from './pages/ServiceDetail.jsx'
  
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App pt-[70px]">
        <Header1 />
        <Routes>
          <Route path="/" element={
            <>
              <SpecialSection />
              <ServicesSection />
              <WhyChooseUs />
              <TherapistTeam />
              <Testimonials />
              <BlogSection />
              <ClassesSection />
            </>
          } />
          <Route path="/about-autism" element={<AboutAutism />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/occupational-therapy" element={<OccupationalTherapyPage />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapyPage />} />
          <Route path="/services/physiotherapy" element={<PhysiotherapyPage />} />
          <Route path="/services/special-education" element={<SpecialEducationPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer1 />
      </div>
    </Router>
  )
}

export default App
