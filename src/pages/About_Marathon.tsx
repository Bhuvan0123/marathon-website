import { HeroVideoDialog } from "../components/ui/hero-video-dialog";
import video_thumbnail from "../assets/video_thumbnail.jpg";
function AboutMarathon() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center  gap-8 py-12 px-4 md:px-16 bg-amber-300 rounded-lg mb-10"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <HeroVideoDialog
          className="rounded-lg "
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/UXkP7y76XaI?si=iGyhQ8u5evt79hwN"
          thumbnailSrc={video_thumbnail}
          thumbnailAlt="Hero Video"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Vellore Marathon 2025
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          "For Life, Run Against Drugs"
        </h3>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
         The Vellore Marathon, a <strong className="text-black text-2xl">5km run</strong> open to all, unites students and the community in promoting physical well-being and mindful living. Beyond fitness, it aims to raise awareness <strong className="text-black text-2xl">against drug use</strong>, encouraging participants to embrace healthy choices and a balanced lifestyle.
        </p>
      </div>
    </section>
    // <div className="relative ">
    //   <HeroVideoDialog
    //     className="block dark:hidden"
    //     animationStyle="top-in-bottom-out"
    //     videoSrc="https://www.youtube.com/embed/UXkP7y76XaI?si=iGyhQ8u5evt79hwN"
    //     thumbnailSrc={video_thumbnail}
    //     thumbnailAlt="Hero Video"
    //   />
    // </div>
  );
}
export default AboutMarathon;
