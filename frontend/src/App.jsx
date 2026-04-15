import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header1 from './components/Header1.jsx'
import Footer1 from './components/Footer1.jsx'
import PageLoader from './components/PageLoader.jsx'
import PageTransition from './components/PageTransition.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutAutism = lazy(() => import('./pages/AboutAutism.jsx'))
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'))
const ServiceDetailModule = lazy(() => import('./pages/ServiceDetail.jsx'))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about-autism" element={<PageTransition><AboutAutism /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/occupational-therapy" element={<PageTransition><ServiceDetailModule service="occupational-therapy" /></PageTransition>} />
        <Route path="/services/speech-therapy" element={<PageTransition><ServiceDetailModule service="speech-therapy" /></PageTransition>} />
        <Route path="/services/physiotherapy" element={<PageTransition><ServiceDetailModule service="physiotherapy" /></PageTransition>} />
        <Route path="/services/special-education" element={<PageTransition><ServiceDetailModule service="special-education" /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
        <Route path="/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="/admin-dashboard" element={<PageTransition><AdminDashboard /></PageTransition>} />    
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App pt-[70px]">
        <Header1 />
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
        <Footer1 />
      </div>
    </Router>
  )
}

export default App
