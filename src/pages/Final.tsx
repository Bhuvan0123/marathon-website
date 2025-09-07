import { motion } from "framer-motion";

const Final = () => (
  <section
    id="register"
    className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-100 flex flex-col items-center justify-center text-center px-6"
  >
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-bold text-red-600 mb-6"
    >
      “Run for the body, run for the soul. Every step is a prayer.”
    </motion.h2>
    <motion.a
      href="/register"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-red-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-red-600 transition"
    >
      Get Started
    </motion.a>
  </section>
);

export default Final;
