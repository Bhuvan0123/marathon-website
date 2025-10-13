import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import agarwal from "../assets/sponsors/agarwal.png"
import aaroya from "../assets/sponsors/aarogya.png"
import sky from "../assets/sponsors/sky.png"
import sri from "../assets/sponsors/sri.png"
import pachaiyappas from "../assets/sponsors/pachaiyappas.png"
import snhrc from "../assets/sponsors/snhrc.webp"
import hellofm from "../assets/sponsors/hellofm.png"
import press from "../assets/sponsors/press.png"
import skytv from "../assets/sponsors/skytv.png"
import bodhi from "../assets/sponsors/bodhi.png"
import alama from "../assets/sponsors/alama.jpg"
import hotelnarayani from "../assets/sponsors/hotelnarayani.png"
import roopakala from "../assets/sponsors/roopakala.jpg"
const sponsorData = [
  {
    logos: [alama,agarwal, roopakala ],
    designation: "Title Sponsors",
  },
  {
    logos: [
      hotelnarayani,
      pachaiyappas,
      sri,
      aaroya,
      sky,      
    ],
    designation: "Co-Sponsors",
  },
  
  {
    logos: [bodhi],
    designation: "Website Sponsor",
  },
  {
    logos: [snhrc],
    designation: "Healthcare Partner",
  },
  {
    logos: [skytv],
    designation: "Media Partner",
  },
  {
    logos: [hellofm],
    designation: "Radio Partner",
  },
  {
    logos: [press],
    designation: "Press Partner",
  },
  

];
function Sponsers() {
  return (
    <section id="sponsors" className="h-[40rem] rounded-md flex flex-col antialiased bg-white/0 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-black text-3xl font-bold">Sponsers</h1>
        <InfiniteMovingCards data={sponsorData} direction="left"
        speed="normal"/>
    </section>
  );
}

export default Sponsers;