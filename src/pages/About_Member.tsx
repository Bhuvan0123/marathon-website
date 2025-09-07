import { motion } from "framer-motion";
import photo from "../assets/person_image.png"
const AboutMember = () => (
  <section
    id="member"
    className="min-h-screen flex items-center bg-white px-8 md:px-20"
  >
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src={photo}
        alt="Organizer"
        className="rounded-full shadow-lg w-72 h-72 object-cover mx-auto"
      />
      <div>
        <h2 className="text-3xl font-bold text-orange-600 mb-2">
          Swami Raghunath
        </h2>
        <h4 className="text-xl text-gray-600 mb-4">Chief Organizer</h4>
        <p className="text-lg text-gray-700">
          Swami Raghunath has dedicated his life to guiding communities towards
          health, wellness, and spiritual growth. His vision for this marathon
          is to blend athleticism with a journey of self-discovery.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutMember;
