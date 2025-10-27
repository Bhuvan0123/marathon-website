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
            className="h-50 w-40 mt-10 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-78 lg:w-58 rounded-full object-cover border-4 border-white shadow-lg md:mt-0"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3 text-center md:text-left md:mt-0">
          <h2 className="text-2xl sm:text-5xl font-bold mb-2">Dr. M. Suresh Babu</h2>
          <h3 className="text-lg sm:text-3xl text-yellow-200 mb-4">Director & Trustee</h3>
          <p className="text-base mb-5 sm:text-[16px]  leading-relaxed text-justify md:text-left md:mb-0">
            Dr. M. Suresh Babu has devoted over three decades of his life to the divine mission of service, walking in the footsteps of our beloved Sri Sakthi Amma. His journey of more than 30 years alongside Amma reflects unwavering faith, humility, and a deep commitment to uplifting humanity through education, social welfare, and spiritual enlightenment.
<br/>
As a Trustee and Director of Sripuram, Sri Narayani Peedam, Sri Sakthi Amma Educational Trust (Sri Narayani Schools), Sri Sakthi Amma Tribal Welfare Trust, and Sri Sakthi Amma Ancient and Holistic Health Care Trust, Dr. M. Suresh Babu has played a pivotal role in realizing Amma’s vision of a compassionate and empowered society.
<br/>
Through his dynamic leadership, several transformative initiatives have been launched — providing quality education to rural children, healthcare for the underprivileged, and spiritual guidance that nurtures values and harmony in society.
<br/>
In celebration of the 50th Jayanthi of Sri Sakthi Amma, this noble cause has been initiated by Dr. M. Suresh Babu as a heartfelt tribute to Amma’s divine mission — reaffirming the path of love, service, and spiritual awakening that continues to inspire thousands across the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
