import { Timeline } from "@/components/ui/timeline";

const data = [
    {
        title:"22 Feb 2024",
        content:(
            <h2>Registration open</h2>
        )
    },
    {
        title:"20 Mar 2024",
        content:(
            <h2>Registration close</h2>
        )
    },
    {
        title:"25 Mar 2024",
        content:(
            <h2>Kit collection</h2>
        )
    },
    {
        title:"30 Mar 2024",
        content:(
            <h2>Marathon day</h2>
        )
    }
];
const TimelinePage = () => {

    return (
        <section
  id="timeline"
  className="py-20 md:py-28 bg-yellow-50 flex flex-col items-center justify-center px-6 md:px-16"
>
  <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-16 tracking-wide">
    Event Timeline
  </h2>
  <div className="relative w-full overflow-clip">
    <Timeline data={data} />
  </div>
</section>
    );
}
export default TimelinePage;
