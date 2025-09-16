import CountdownWithProgress from "@/components/ui/count-down";
import { FlipWords } from "@/components/ui/flip-words";
import { useNavigate } from "react-router-dom";

const Final = () => {
   const words = ["Health","Self", "World", "Nature"];
    const navigate = useNavigate();
   return ( 
  <section
    id="register"
    className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-100 flex flex-col items-center justify-center text-center px-6"
  >
    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Join the marathon for
        <FlipWords words={words} duration={1000} /> <br />
    </div>
    <CountdownWithProgress />
    <button 
     className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500  to-red-500 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-xl focus:outline-none"
    onClick={() => navigate("/register")}>
      Go to Register
    </button>
  </section>
);
}
export default Final;
