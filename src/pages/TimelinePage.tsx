
import videoSrc from "../assets/logo/Timeline.mp4"

function TimelinePage(){
  return (
<section className="w-full rounded-2xl  p-4 sm:p-8 flex flex-col items-center mx-auto my-4">
    <h2 className="mb-6 font-bold text-4xl text-black">Timeline</h2>
    <div className="w-full sm:w-4/5 rounded-xl aspect-video flex items-center justify-center">
        <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
        />
    </div>
</section>
);
}
export default TimelinePage;