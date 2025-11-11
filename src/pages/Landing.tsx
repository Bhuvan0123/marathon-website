import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
export default function HeroZoom() {
  // Track scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Zoom effect: scale text from 1x to 50x
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 15]);

  // Fade out overlay after zoom
  const opacity = useTransform(scrollYProgress, [0.08, 0.15], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black pointer-events-none overflow-hidden"
    >
      <motion.h1
        style={{ scale ,transformOrigin: '57% center'}}
        className="text-[20vw] font-extrabold leading-none text-amber-100 "
      >
      RUN
      </motion.h1>
      <motion.h1
        className="flex items-center gap-2 text-s font-semibold text-amber-100 mt-6 md:text-s"
      >
        scroll down to explore <span><FaArrowDown /></span>
      </motion.h1>
    </motion.div>
  );
}
