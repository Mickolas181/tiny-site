import SpecialSection from '../components/SpecialSection.jsx'
import ServicesSection from '../components/Service.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import TherapistTeam from '../components/TherapistTeam.jsx'
import Testimonials from '../components/Testimonials.jsx'
import BlogSection from '../components/BlogSection.jsx'
import ClassesSection from '../components/Contactus.jsx'

export default function HomePage() {
  return (
    <>
      <SpecialSection />
      <ServicesSection />
      <WhyChooseUs />
      <TherapistTeam />
      <Testimonials />
      <BlogSection />
      <ClassesSection />
    </>
  )
}
