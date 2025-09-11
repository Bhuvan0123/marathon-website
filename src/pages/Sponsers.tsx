import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import agarwal from "../assets/sponsors/agarwal.png"
import otomatiks from "../assets/sponsors/otomatiks.png"
import aaroya from "../assets/sponsors/aarogya.png"
import sky from "../assets/sponsors/sky.png"
import sri from "../assets/sponsors/sri.png"
import arteg from "../assets/sponsors/arteg.png"
import mnjewelpark from "../assets/sponsors/mnjewelpark.png"
import pachaiyappas from "../assets/sponsors/pachaiyappas.png"
import snhrc from "../assets/sponsors/snhrc.webp"
import hellofm from "../assets/sponsors/hellofm.png"
import press from "../assets/sponsors/press.png"
import clear from "../assets/sponsors/clear.png"
import skytv from "../assets/sponsors/skytv.png"
import bodhi from "../assets/sponsors/bodhi.png"
import vegan from "../assets/sponsors/vegan.png"
import lions from "../assets/sponsors/lions.png"
const sponsorData = [
  {
    logos: [agarwal, otomatiks ],
    designation: "Title Sponsors",
  },
  {
    logos: [
      aaroya,
      sky,
      sri,
      arteg,
      mnjewelpark,
      pachaiyappas,
    ],
    designation: "Co-Sponsors",
  },
  {
    logos: [snhrc],
    designation: "Healthcare Partner",
  },
  {
    logos: [hellofm],
    designation: "Radio Partner",
  },
  {
    logos: [press],
    designation: "Press Partner",
  },
  {
    logos: [clear],
    designation: "Hydration Partner",
  },
  {
    logos: [skytv],
    designation: "Media Partner",
  },
  {
    logos: [bodhi],
    designation: "Website Partner",
  },
  {
    logos: [vegan,lions],
    designation: "Organizer",
  },

];
function Sponsers() {
  return (
    <section id="sponsors" className="h-[40rem] rounded-md flex flex-col antialiased bg-white/0 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="">Sponsers</h1>
        <InfiniteMovingCards data={sponsorData} direction="left"
        speed="normal"/>
    </section>
  );
}

export default Sponsers;