"use client";
import photo from "../assets/sri_sakthi_amma.avif"

import { motion } from "framer-motion";

const AboutMember1 = () => {
  return (
    <section id="member" className="relative min-h-screen w-screen flex items-center justify-center px-8 md:px-20 mb-10">
      {/* Background animated container */}
      <motion.div
        className="absolute top-0 left-0 h-full w-[100%] bg-orange-600 rounded-r-full"
        initial={{ x: "-100%" }}
        whileInView={{ x: -150 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Image */}
        

        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-2">Sri Sakhti Amma</h2>
          <h3 className="text-xl text-yellow-200 mb-4">Chief Organizer</h3>
          <p className="text-lg leading-relaxed text-justify">
            Sri Sakthi Amma is the first and only known avatara (incarnation) of the Goddess Narayani, a divine feminine energy, who declared her divinity in 1992 and established the Sri Narayani Peedam in India to serve humanity and promote peace. Followers believe Amma to be the embodiment of divine love and grace, demonstrating miraculous powers and initiating various humanitarian projects focused on education, healthcare, and community well-being.
          </p>
        </div>
        <img
          src={photo}
          alt="Member"
          className="h-68 w-68 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutMember1;
