import banner from "../assets/logo/banner.jpg"

/**
 * BannerDisplay
 * - Simple, non-interactive banner image for site and mobile layouts
 * - No overlays, modals, or download controls
 */
export default function Banner() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center  gap-8 py-12 px-4 md:px-16 bg-amber-300 rounded-lg mb-10"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
        src={banner}
        alt="Vellore Marathon 2025 Banner"
        className="rounded-2xl shadow-lg"
      />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <p className="text-2xl md:text-3xl text-gray-800 mb-6 italic font-bold">Celebrating the 50th Jayanthi of our Beloved Sri Sakthi Amma</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
          Vellore Marathon 2025
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          "Run For Life, Run Against Drugs"
        </h3>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-justify">
          The Vellore Marathon is a <strong className="text-black text-2xl">8km run</strong> <strong className="text-black text-2xl">open to all</strong>, uniting students, families, and community groups to promote <strong className="text-black text-2xl">physical well-being</strong> and mindful living. Beyond fitness, the event raises awareness <strong className="text-black text-2xl">against drug use</strong>, encouraging participants to embrace <strong className="text-black text-2xl">healthy choices</strong> and a balanced lifestyle. This family-friendly day also offers training workshops, community booths, and volunteer opportunities to foster camaraderie and local engagement, with proceeds and efforts aimed at supporting health education and charity partners. Early registration is encouraged to secure spots and help the organizers plan a safe, inclusive celebration of the 50th Jayanthi of Sri Sakthi Amma.
        </p>
      </div>
    </section>
  );
}

