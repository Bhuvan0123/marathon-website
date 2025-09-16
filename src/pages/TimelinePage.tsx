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
        className="text-black py-20 md:py-28 bg-yellow-50 flex flex-col items-center justify-center px-6 md:px-16"
        >
            <h1 className="text-4xl font-bold mb-6">Marathon Timeline</h1>
            <div className="max-w-4xl w-full text-center mb-10">
                <Timeline data={data} />
            </div>
        </section>
    );
}
export default TimelinePage;
