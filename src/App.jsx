// ============================================
// App.jsx
// PURPOSE: Idhu MAIN FILE. Full website-oda boss.
//          Yaar enna page-ku poganum, enna show aaganumnu
//          ellam idhu thaan decide pannum.
// ============================================

// --- IMPORTS ---

// "lazy" = page-a LATER-la download pannum (not immediately)
// "Suspense" = download aagidum varai loading screen show pannum
import { lazy, Suspense } from 'react'

// Router related imports:
// BrowserRouter = URL handle pannum (/about, /services, etc.)
// Routes = "idhu namma ella routes-oda container"
// Route = "indha URL-ku indha page show pannu"
// useLocation = "ipppo user enna URL-la irukaan?" nu check pannum
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// AnimatePresence = page marum pothu old page-ku EXIT animation,
//                   new page-ku ENTER animation play pannum.
import { AnimatePresence } from 'framer-motion'

// --- NORMAL IMPORTS (download immediately) ---
// Header & Footer = EVERY page-layum irukkum,
// so lazy loading thevai illa.
import Header1 from './components/Header1.jsx'       // Top navigation bar
import Footer1 from './components/Footer1.jsx'       // Bottom footer
import PageLoader from './components/PageLoader.jsx' // Loading animation (dots + bar)
import PageTransition from './components/PageTransition.jsx' // Fade-in/out wrapper
import ScrollToTop from './pages/ScrollToTop.jsx'    // Page marum pothu top-ku scroll

// --- LAZY IMPORTS (download ONLY when user navigates) ---
// Example: User Home-la irukaan. About page download aagala.
//          User "About" click pannaan → APROM About download aagidum.
//          Net fast → instant download → no loading screen.
//          Net slow → download takes time → PageLoader show aagidum.
const HomePage = lazy(() => import('./pages/HomePage.jsx'))           // Home page
const AboutAutism = lazy(() => import('./pages/AboutAutism.jsx'))     // About Autism page
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'))             // About Us page
const Services = lazy(() => import('./pages/Services.jsx'))           // Services list page
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'))         // Contact Us page
const ServiceDetailModule = lazy(() => import('./pages/ServiceDetail.jsx')) // Individual service pages

// ============================================
// AnimatedRoutes COMPONENT
// PURPOSE: Page marum pothu smooth animation varum.
//          Old page fade-out → New page fade-in.
// ============================================
function AnimatedRoutes() {

  // useLocation() = current URL enna? Example: "/about"
  const location = useLocation()

  return (
    // AnimatePresence = "old page EXIT animation mudiyum varai wait pannu,
    //                    aprom pudhu page ENTER animation start pannu"
    // mode="wait" = old page fully exit → then new page enter
    <AnimatePresence mode="wait">

      {/* Routes = "indha URL-ku indha page show pannu" */}
      {/* location={location} = current URL pass pannurom */}
      {/* key={location.pathname} = URL marum pothu React-ku
          "pudhusa page vandhirukku!" nu theriyum.
          So old page unmount aagi, new page mount aagidum.
          AnimatePresence adha detect panni animation play pannum. */}
      <Routes location={location} key={location.pathname}>

        {/* --- HOME PAGE --- */}
        {/* path="/" = website root URL (www.tinytodds.com/) */}
        <Route path="/" element={
          <PageTransition>    {/* Fade-in wrapper */}
            <HomePage />      {/* Actual home page content */}
          </PageTransition>
        } />

        {/* --- ABOUT AUTISM PAGE --- */}
        {/* path="/about-autism" = www.tinytodds.com/about-autism */}
        <Route path="/about-autism" element={
          <PageTransition>
            <AboutAutism />
          </PageTransition>
        } />

        {/* --- ABOUT US PAGE --- */}
        <Route path="/about" element={
          <PageTransition>
            <AboutUs />
          </PageTransition>
        } />

        {/* --- SERVICES LIST PAGE --- */}
        <Route path="/services" element={
          <PageTransition>
            <Services />
          </PageTransition>
        } />

        {/* --- INDIVIDUAL SERVICE PAGES --- */}
        {/* service="occupational-therapy" = andha specific service show pannum */}
        <Route path="/services/occupational-therapy" element={
          <PageTransition>
            <ServiceDetailModule service="occupational-therapy" />
          </PageTransition>
        } />

        <Route path="/services/speech-therapy" element={
          <PageTransition>
            <ServiceDetailModule service="speech-therapy" />
          </PageTransition>
        } />

        <Route path="/services/physiotherapy" element={
          <PageTransition>
            <ServiceDetailModule service="physiotherapy" />
          </PageTransition>
        } />

        <Route path="/services/special-education" element={
          <PageTransition>
            <ServiceDetailModule service="special-education" />
          </PageTransition>
        } />

        {/* --- CONTACT US PAGE --- */}
        <Route path="/contact" element={
          <PageTransition>
            <ContactUs />
          </PageTransition>
        } />

      </Routes>
    </AnimatePresence>
  )
}

// ============================================
// MAIN APP COMPONENT
// PURPOSE: FULL website structure.
//          Header (top) + Pages (middle) + Footer (bottom)
// ============================================
function App() {
  return (
    // Router = URL system ON pannum. Idhu illana /about, /services work aagaathu.
    <Router>
      {/* ScrollToTop = page marum pothu automatically top-ku scroll aagidum */}
      <ScrollToTop />

      {/* pt-[70px] = padding-top 70px. Header 70px high,
          so content header-ku keezha start aagidum (overlap aagaathu) */}
      <div className="App pt-[70px]">

        {/* Header = ALWAYS show aagidum (top navigation bar) */}
        <Header1 />

        {/* Suspense = lazy page download aagidum varai
            fallback={<PageLoader />} show pannum.
            Download complete aana udan, actual page show aagidum. */}
        <Suspense fallback={<PageLoader />}>
          {/* AnimatedRoutes = page transition animations */}
          <AnimatedRoutes />
        </Suspense>

        {/* Footer = ALWAYS show aagidum (bottom section) */}
        <Footer1 />
      </div>
    </Router>
  )
}

// "export default" = vera file-la irundhu
// "import App from './App'" nu use panna mudiyum
export default App
