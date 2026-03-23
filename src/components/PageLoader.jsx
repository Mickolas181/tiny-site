// ============================================
// PageLoader.jsx
// PURPOSE: Internet slow-a irukkum pothu
//          user-ku oru "loading..." screen kaatanum.
//          Idhu andha loading screen component.
// ============================================

// "motion" = animation library. Bounce, fade, slide
// maadhiri effects panna use pannuvom.
import { motion } from 'framer-motion';

// Idhu oru function. "PageLoader" nu per.
// Indha function call aana udan, loading screen
// screen-la theriyum.
export default function PageLoader() {

  // "return" = browser-la enna show pannanum nu sollurom
  return (

    // --- FULL SCREEN WHITE BOX ---
    // fixed    = scroll pannaalum idhu stay aagum
    // inset-0  = top:0, left:0, right:0, bottom:0 (full screen)
    // z-[9999] = ella content mela irukkum (top layer)
    // bg-white = white background color
    // flex     = items-a center-la vaikka help pannum
    // flex-col = items mela-keela arrange aagidum (column)
    // items-center = horizontal center
    // justify-center = vertical center
    // gap-6    = items-ku naduvula 24px space
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6">

      {/* --- 3 BOUNCING DOTS --- */}
      {/* [0, 1, 2] = 3 items. 3 dots create aagidum */}
      {/* .map() = oru array-oda each item-ku oru element create pannum */}
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (

          // motion.div = animated div (normal div + animation powers)
          <motion.div
            key={i}  // React-ku "idhu unique dot #0, #1, #2" nu solla

            // --- DOT SHAPE ---
            // w-3 h-3 = 12px x 12px square
            // rounded-full = circle shape
            // bg-[#0F3460] = dark navy blue color
            className="w-3 h-3 rounded-full bg-[#0F3460]"

            // --- ANIMATION ---
            // animate = enna movement nadakkanum
            animate={{
              y: [0, -12, 0],         // y-axis: 0px → mela 12px → thirumba 0px (BOUNCE!)
              opacity: [0.4, 1, 0.4], // 40% dim → 100% bright → 40% dim (BLINK!)
            }}

            // --- ANIMATION SETTINGS ---
            transition={{
              duration: 0.6,       // Oru bounce = 0.6 seconds
              repeat: Infinity,    // Infinity = never stop, loading mudiyum varai repeat
              delay: i * 0.15,     // Dot 0: start at 0s
                                   // Dot 1: start at 0.15s
                                   // Dot 2: start at 0.3s
                                   // Idhu thaan "wave" effect create pannum!
              ease: 'easeInOut',   // Smooth-a start & stop aagidum
            }}
          />
        ))}
      </div>

      {/* --- BRAND NAME --- */}
      <div className="text-center">
        {/* text-[#0F3460] = navy blue color */}
        {/* font-bold = bold/thick text */}
        {/* text-sm = small size text */}
        {/* tracking-wider = letters-ku naduvula extra space */}
        <p className="text-[#0F3460] font-bold text-sm tracking-wider">TINY TODDS</p>

        {/* text-slate-400 = light gray color */}
        {/* text-xs = extra small text */}
        {/* mt-1 = margin-top 4px (konjam keezha) */}
        <p className="text-slate-400 text-xs mt-1">Loading...</p>
      </div>

      {/* --- PROGRESS BAR --- */}
      {/* w-40 = 160px wide */}
      {/* h-0.5 = 2px height (romba thin line) */}
      {/* bg-slate-100 = light gray background (empty bar) */}
      {/* rounded-full = rounded ends */}
      {/* overflow-hidden = inside content bar-ku veliya pogaathu */}
      <div className="w-40 h-0.5 bg-slate-100 rounded-full overflow-hidden">

        {/* Idhu bar INSIDE-la move aagura colored line */}
        <motion.div
          // bg-gradient-to-r = left to right gradient color
          // from-[#00ADB5] = start: teal color
          // to-[#E94560] = end: red/pink color
          className="h-full bg-gradient-to-r from-[#00ADB5] to-[#E94560] rounded-full"

          // x = horizontal position
          // ['-100%', '100%'] = left side-la irundhu right side-ku move aagidum
          animate={{ x: ['-100%', '100%'] }}

          transition={{
            duration: 1.2,       // 1.2 seconds-la left → right
            repeat: Infinity,    // Keep repeating
            ease: 'easeInOut',   // Smooth movement
          }}

          // width 60% = bar full width-oda 60% mattum colored
          style={{ width: '60%' }}
        />
      </div>

    </div>
  );
}
