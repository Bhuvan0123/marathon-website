import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  let hoverTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => setVisible(true), 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 shadow-md z-50"
        >
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-red-600">Marathon 2025</h1>
            <div className="flex space-x-6 text-gray-700 font-medium">
              <a href="#about">About</a>
              <a href="#member">Member</a>
              <a href="#timeline">Timeline</a>
              <a href="#rules">Rules</a>
              <a href="#register">Register</a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
