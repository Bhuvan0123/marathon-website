"use client";
import photo from "../assets/sri_sakthi_amma.avif"

import { motion } from "framer-motion";

const AboutMember1 = () => {
  return (
    <section
      id="member"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 mb-10"
    >
      {/* Background animated container for md+ screens */}
      <motion.div
        className="hidden md:block absolute top-0 left-0 h-full w-full bg-orange-600 rounded-r-full"
        initial={{ x: "-100%" }}
        whileInView={{ x: -150 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* Static background for mobile */}
      <div className="block md:hidden absolute rounded-3xl top-0 right-0 h-full w-full bg-orange-600" />

      {/* Content on top */}
      <div
        className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 text-white w-full max-w-4xl"
      >
        {/* Text */}
  <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Sri Sakhti Amma</h2>
          <h3 className="text-lg sm:text-xl text-yellow-200 mb-4">Chief Organizer</h3>
          <p className="text-base sm:text-lg leading-relaxed text-justify md:text-left">
            Sri Sakthi Amma is the first and only known avatara (incarnation) of the Goddess Narayani, a divine feminine energy, who declared her divinity in 1992 and established the Sri Narayani Peedam in India to serve humanity and promote peace. Followers believe Amma to be the embodiment of divine love and grace, demonstrating miraculous powers and initiating various humanitarian projects focused on education, healthcare, and community well-being.
          </p>
        </div>
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/3">
          <img
            src={photo}
            alt="Member"
            className="h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-68 lg:w-68 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMember1;
