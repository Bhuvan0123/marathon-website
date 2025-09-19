import CountdownWithProgress from "@/components/ui/count-down";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Final = () => {
    const navigate = useNavigate();
   return ( 
  <section
    id="register"
    className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-100 flex flex-col items-center justify-center text-center px-6"
  >
    <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Join the race for"
          words={["Health","Self", "World", "Nature"]}
        />
    </motion.div>
    <CountdownWithProgress />
    <button 
     className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500  to-red-500 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-xl focus:outline-none z-30"
    onClick={() => navigate("/register")}>
      Go to Register
    </button>
  </section>
);
}
export default Final;
