"use client";
import photo from "../assets/members/Amma jayanthi.png"

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
        whileInView={{ x: -100 }}
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
          <h2 className="text-2xl sm:text-5xl font-bold mb-14 text-white">Sri Sakhti Amma</h2>
          <p className="text-base sm:text-xl leading-relaxed text-justify md:text-left">
            Sri Sakthi Amma embodies divine grace, radiating wisdom and compassion.
Renowned for teachings on love, compassion, and selfless service, countless
followers have found inspiration through guidance and humanitarian efforts.
With a focus on the importance of spiritual growth, community welfare, and
education, numerous initiatives have been launched, including schools, healthcare
programs, and charitable activities aimed at uplifting society.   
          </p>
        </div>
        {/* Image */}
        <div className="pt-10 flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/3">
          <img
            src={photo}
            alt="Member"
            className="h-70 w-70 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-128 lg:w-158 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMember1;
