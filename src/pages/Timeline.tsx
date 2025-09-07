import { motion } from "framer-motion";

const events = [
  { date: "March 1", label: "Registration Opens", color: "bg-yellow-200" },
  { date: "April 10", label: "Registration Deadline", color: "bg-red-200" },
  { date: "April 20", label: "Marathon Day", color: "bg-orange-200" },
];

const Timeline = () => (
  <section
    id="timeline"
    className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-8 md:px-20"
  >
    <h2 className="text-3xl font-bold text-red-600 mb-10">Event Timeline</h2>
    <div className="space-y-6 w-full max-w-3xl">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`p-6 rounded-xl shadow-md ${event.color}`}
        >
          <h3 className="text-xl font-semibold">{event.label}</h3>
          <p className="text-gray-700">{event.date}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Timeline;
