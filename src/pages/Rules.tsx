import { HoverEffect } from "@/components/ui/card-hover-effect";
const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  
];

const Rules = () => (
  <section
    id="rules"
    className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center px-8 md:px-20"
  >
    <h2 className="text-3xl font-bold text-orange-600 mb-10">
      Rules & Regulations
    </h2>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardSpotlight color="#FFFF00" className="h-60 w-60 bg-amber-100">
            <h3>Eligibility</h3>
            <p>Participants must be 18+ years old.</p>
        </CardSpotlight>
        <CardSpotlight color="#FFD700" className="h-60 w-60 bg-amber-100">
            <h3>Eligibility</h3>
            <p>Participants must be 18+ years old.</p>
        </CardSpotlight>
        <CardSpotlight color="#FFD700" className="h-60 w-60 bg-amber-100">
            <h3>Eligibility</h3>
            <p>Participants must be 18+ years old.</p>
        </CardSpotlight>
    </div> */}
  </section>
);

export default Rules;
