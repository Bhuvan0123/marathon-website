"use client";

import { motion } from "framer-motion";
import photo from "../assets/members/director.jpg"


const MemberSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 mb-10">
      {/* Background animated container for md+ screens */}
      <motion.div
        className="hidden md:block absolute top-0 right-0 h-full w-full bg-orange-600 rounded-l-full"
        initial={{ x: "100%" }}
        whileInView={{ x: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* Static background for mobile */}
      <div className="block md:hidden absolute top-0 left-0 h-full w-full rounded-3xl bg-orange-600" />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-white w-full max-w-4xl">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3">
          <img
            src={photo}
            alt="Member"
            className="h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-78 lg:w-58 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-5xl font-bold mb-2">Dr. M. Suresh Babu</h2>
          <h3 className="text-lg sm:text-3xl text-yellow-200 mb-4">Director & Trustee</h3>
          <p className="text-base sm:text-2xl leading-relaxed text-justify md:text-left">
            Dr. M. Suresh Babu is the Trustee and Director of Sripuram, Sri Narayani Peedam, Sri Sakthi Amma Educational Trust (Sri Narayani Schools), Sri Sakthi Amma Tribal Welfare Trust, and Sri Sakthi Amma Ancient and Holistic Health Care Trust. In celebration of his birthday on November 21, 2024, a grand marathon is being organized to honor his dedication to health, well-being, and community spirit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
