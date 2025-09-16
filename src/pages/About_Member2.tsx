"use client";

import { motion } from "framer-motion";
import photo from "../assets/members/suresh_babu.jfif"


const MemberSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-20 mb-10 ">
      {/* Background animated container (from right to left) */}
      <motion.div
        className="absolute top-0 right-0 h-full w-[100%] bg-orange-600 rounded-l-full"
        initial={{ x: "100%" }}
        whileInView={{ x: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Image */}
        <img
          src={photo}
          alt="Member"
          className="h-68 w-68 rounded-full object-cover border-4 border-white shadow-lg"
        />

        {/* Text */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-2">Dr. M. Suresh Babu</h2>
          <h3 className="text-xl text-yellow-200 mb-4">Director</h3>
          <p className="text-lg leading-relaxed text-justify">
            
                Dr. M. Suresh Babu has devoted over 30 years to dedicated service, emulating the exemplary path of our beloved Sri Sakthi Amma. His leadership and contributions have made a significant and lasting impact on education, social welfare, and spiritual well-being.

                Dr. M. Suresh Babu is the Trustee and Director of Sripuram, Sri Narayani Peedam, Sri Sakthi Amma Educational Trust (Sri Narayani Schools), Sri Sakthi Amma Tribal Welfare Trust, and Sri Sakthi Amma Ancient and Holistic Health Care Trust. In celebration of his birthday on November 21, 2024, a grand marathon is being organized to honor his dedication to health, well-being, and community spirit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
