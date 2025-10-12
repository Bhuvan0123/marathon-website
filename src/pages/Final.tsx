import CountdownWithProgress from "@/components/ui/count-down";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const Final = () => {
   return ( 
  <section
    id="register"
    className="rounded-xl min-h-screen mt-10 bg-amber-200 flex flex-col items-center justify-center text-center px-6"
  >
    <div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Join the race for"
          words={["Health","Self", "World", "Nature"]}
        />
    </div>
    <CountdownWithProgress />
    <a
      href="https://forms.gle/your-google-form-link"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 mb-10 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-xl focus:outline-none z-30 flex items-center justify-center "
    >
      Go to Register
    </a>
  </section>
);
}
export default Final;
