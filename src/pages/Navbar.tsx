import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import side_logo from "../assets/logo/logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#member", label: "Member" },
  { href: "#category", label: "Categories" },
  { href: "#register", label: "Register" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    let hoverTimeout: NodeJS.Timeout;
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
        hoverTimeout = setTimeout(() => setVisible(true), 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Sidebar animation variants
  const sidebarVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
  };

  return (
    <>
      {/* Desktop Navbar */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 shadow-md z-50"
          >
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
              <img
                src={side_logo}
                alt="Marathon Logo"
                className=" h-12 w-auto"
              />
              <div className="flex space-x-6 text-red-800 font-medium text-xl">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile/Tablet Sidebar Button */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 shadow-md z-50 flex items-center px-4 py-3">
        <button
          aria-label="Open menu"
          className="text-2xl text-red-600 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          {/* Hamburger Icon */}
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        <img src={side_logo} alt="Marathon Logo" className="ml-12 h-8 w-auto" />
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-yellow-100 via-orange-100 to-red-100 shadow-lg z-50 flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-lg font-bold text-red-600">Menu</h2>
                <button
                  aria-label="Close menu"
                  className="text-2xl text-red-600 focus:outline-none"
                  onClick={() => setSidebarOpen(false)}
                >
                  {/* Close Icon */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <line
                      x1="6"
                      y1="6"
                      x2="18"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="6"
                      y1="18"
                      x2="18"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-14 px-6 py-6 text-gray-700 text-xl font-medium">
                {navLinks.map((link) => (
                  <div>
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-red-600 transition"
                  >
                    {link.label}
                  </a>
                  <div className="border-1 mt-10 ml-1 mr-1 border-gray-500"></div>
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
