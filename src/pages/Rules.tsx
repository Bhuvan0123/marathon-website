import { motion } from "framer-motion";

const rules = [
  { title: "Eligibility", text: "Participants must be 18+ years old." },
  {
    title: "Fair Play",
    text: "Respect fellow runners and follow race guidelines.",
  },
  {
    title: "Health Safety",
    text: "Medical checks are recommended before participation.",
  },
];

const Rules = () => (
  <section
    id="rules"
    className="min-h-screen bg-white flex flex-col items-center justify-center px-8 md:px-20"
  >
    <h2 className="text-3xl font-bold text-orange-600 mb-10">
      Rules & Regulations
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {rules.map((rule, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-yellow-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
          <p className="text-gray-700">{rule.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Rules;
