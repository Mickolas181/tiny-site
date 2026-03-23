// ============================================
// PageTransition.jsx
// PURPOSE: Page marum pothu (Home → About, About → Services)
//          smooth-a fade-in / fade-out animation varum.
//          Idhu andha animation wrapper.
//          Ella page-layum idha suthi poduvom.
// ============================================

// "motion" = Framer Motion animation library
import { motion } from 'framer-motion';

// --- ANIMATION SETTINGS ---
// Idhu oru object. 3 states irukku: initial, enter, exit.
// Think of it like a person entering a room:
//   initial = door veliya nikkuraan (invisible)
//   enter   = room-ku ulla varraan (visible)
//   exit    = room-la irundhu veliya poiraan (invisible again)
const pageVariants = {

  // STATE 1: "initial" = page FIRST varum pothu epdi irukkanum
  initial: {
    opacity: 0,    // opacity 0 = completely invisible (theriyaathu)
    y: 12,         // y: 12 = 12px keezha (down) irukkum
  },

  // STATE 2: "enter" = page VANDHA aprom epdi irukkanum
  enter: {
    opacity: 1,    // opacity 1 = fully visible (theriyum!)
    y: 0,          // y: 0 = normal position-la irukkum (slide up effect)

    transition: {
      duration: 0.35,                 // 0.35 seconds = romba fast animation
      ease: [0.22, 1, 0.36, 1],      // Custom curve = smooth & professional feel
    },
  },

  // STATE 3: "exit" = page POGUM pothu epdi maraiyanum
  exit: {
    opacity: 0,    // invisible aagidum
    y: -8,         // 8px mela pogidum (slide up out)

    transition: {
      duration: 0.2,    // 0.2 seconds = even faster exit
      ease: 'easeIn',   // Starts slow, ends fast
    },
  },
};

// --- THE COMPONENT ---
// "children" = indha wrapper-ku INSIDE-la enna irukko adhu.
// Example: <PageTransition><AboutUs /></PageTransition>
//          here, children = <AboutUs />
export default function PageTransition({ children }) {

  return (
    // motion.div = div with animation powers
    <motion.div
      variants={pageVariants}   // Mela define panna 3 states-a use pannurom
      initial="initial"         // Start state: invisible + 12px keezhe
      animate="enter"           // After mount: fade-in + slide up
      exit="exit"               // Before unmount: fade-out + slide up
    >
      {/* children = actual page content (AboutUs, Services, etc.) */}
      {children}
    </motion.div>
  );
}
