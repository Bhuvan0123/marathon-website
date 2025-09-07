import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";

const Final = () => {
   const words = ["Health","Self", "World", "Nature"];
   return ( 
  <section
    id="register"
    className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-100 flex flex-col items-center justify-center text-center px-6"
  >
    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Join the marathon for
        <FlipWords words={words} duration={1000} /> <br />
    </div>
    <Button
        borderRadius="1.75rem"
        borderClassName="h-24 w-24 bg-[radial-gradient(circle,#ffffff_0%,#facc15_30%,#fb923c_60%,#ef4444_90%)] opacity-90"
        containerClassName="h-16 w-44 bg-transparent p-[2px] rounded-2xl"
        className="bg-yellow-500 text-black-400 font-semibold hover:text-[20px] transition-size duration-300 "
      >
        Register Now
      </Button>
  </section>
);
}
export default Final;
