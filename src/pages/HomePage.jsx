// ============================================
// HomePage.jsx
// PURPOSE: Website-oda HOME page.
//          User "/" (root URL) visit pannaa idhu show aagidum.
//          Idhu-la homepage-oda ELLA sections irukkum.
// ============================================

// --- IMPORTS ---
// Idhu ella homepage sections. Separate files-la irukku.
// import = "andha file-la irundhu component-a eduthu vaa"

import SpecialSection from '../components/SpecialSection.jsx'  // "They Are Special" section
import ServicesSection from '../components/Service.jsx'        // Vision, Mission, We Care cards + stats
import WhyChooseUs from '../components/WhyChooseUs.jsx'        // 6 feature cards (why parents trust us)
import TherapistTeam from '../components/TherapistTeam.jsx'    // 4 therapist profile cards
import Testimonials from '../components/Testimonials.jsx'      // Parent reviews carousel
import BlogSection from '../components/BlogSection.jsx'        // 3 blog article cards
import ClassesSection from '../components/Contactus.jsx'       // Branch locations + phone numbers

// --- THE COMPONENT ---
// "export default" = vera file import panna mudiyum
// "function HomePage()" = idhu oru function, "HomePage" nu per
export default function HomePage() {

  // return = browser-la enna show pannanum
  return (
    // <> </> = "Fragment". Oru wrapper thaan.
    // Browser-la enna-um show aagaathu,
    // but React-ku "idhu ella oru group" nu sollurom.
    <>
      <SpecialSection />    {/* Section 1: About autism info + image */}
      <ServicesSection />   {/* Section 2: Vision/Mission cards + number stats */}
      <WhyChooseUs />       {/* Section 3: 6 feature cards */}
      <TherapistTeam />     {/* Section 4: 4 therapist profiles */}
      <Testimonials />      {/* Section 5: Parent reviews (auto-rotate) */}
      <BlogSection />       {/* Section 6: 3 blog articles */}
      <ClassesSection />    {/* Section 7: Branch locations + CTA phone */}
    </>
  )
}
