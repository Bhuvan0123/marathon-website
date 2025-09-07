import { motion } from "framer-motion";

const AboutMarathon = () => (
  <section
    id="about"
    className="min-h-screen flex items-center bg-yellow-50 px-8 md:px-20"
  >
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Marathon</h2>
        <p className="text-lg text-gray-700">
          The annual Spiritual Marathon is more than just a race—it’s a journey
          of endurance, unity, and devotion. Join thousands of runners in
          celebrating health, community, and a divine spirit of togetherness.
        </p>
      </div>
      <img
        src="https://source.unsplash.com/600x400/?marathon,run"
        alt="Marathon"
        className="rounded-2xl shadow-lg"
      />
    </motion.div>
  </section>
);

export default AboutMarathon;
