import {
  PopoverCloseButton,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/pop-over";
import medalLogo from "../assets/icons/finisher-medal.png";
import tshirtLogo from "../assets/icons/race-jersey.png";
import certificateLogo from "../assets/icons/timing-certificate.png";
import breakfastLogo from "../assets/icons/food_2771460.png";
import emergencyLogo from "../assets/icons/emergency.png";
import logo from "../assets/logo/amma_50.png";

export default function Categories() {
  const items = [
    { logo: medalLogo, text: "A dazzling finisher’s medal" },
    { logo: tshirtLogo, text: "Official race-day T-shirt" },
    { logo: certificateLogo, text: "Certificate for all finishers" },
    { logo: breakfastLogo, text: "Breakfast & Refreshments" },
    { logo: emergencyLogo, text: "Emergency Support" },
  ];

  return (
    <section
      id="category"
      className="rounded-xl py-16 px-6 bg-gradient-to-b from-amber-400 via-amber-300 to-yellow-200"
    >
      {/* Headline */}
      <h1 className="mb-10 text-4xl font-extrabold text-center text-orange-900 drop-shadow-md">
        Marathon Details
      </h1>

      {/* Main Event Details Card */}
      <div className="flex justify-center items-center mb-16">
        <div className="opacity-100 max-w-5xl w-full rounded-3xl p-0 md:p-0 shadow-2xl bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 flex flex-col md:flex-row items-stretch border border-orange-200 overflow-hidden">
          {/* Left: Event Logo */}
          <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-b from-amber-200 to-yellow-100 md:w-1/3 w-full p-2">
            <img
              src={logo}
              alt="Marathon Event Logo"
              className="w-60 h-60 md:w-100 md:h-100 object-contain drop-shadow-xl animate-bounce-slow"
            />
          </div>
          {/* Right: Event Details */}
          <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-12 ">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-900 mb-4">
              Event Details
            </h2>
            <ul className="text-lg md:text-xl text-orange-800 space-y-4 mb-4 w-full">
              <li className="items-center flex flex-col md:flex-row md:items-center  gap-1 md:gap-2">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl">📅</span>
                  <span className="font-semibold">Date:</span>
                </div>
                <span className="text-orange-700 ml-7 md:ml-1">{/* indent for mobile */}21 December 2025</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  <span className="font-semibold">Time:</span>
                </div>
                <span className="text-orange-700 ml-7 md:ml-1">5:00 AM onwards</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold">Location:</span>
                </div>
                <span className="text-orange-700 ml-7 md:ml-1">
                  Vellore Old Bus Stand <span className="font-bold">to</span> Sri Narayani Schools
                </span>
              </li>
            </ul>
            <div className="bg-yellow-100 rounded-xl px-5 py-4 shadow-inner w-full">
              <p className="text-lg text-orange-700 leading-relaxed text-center">
                Join us for an{" "}
                <span className="font-semibold text-orange-800">
                  unforgettable marathon
                </span>{" "}
                experience filled with scenic routes, energetic crowd, and
                exclusive rewards!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Popovers */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {/* Men Category Popover */}
        <PopoverRoot>
          <PopoverTrigger className="w-60 md:w-106 h-auto p-6 justify-center items-center rounded-2xl shadow-lg bg-orange-100 text-orange-900 hover:bg-yellow-200 ">
            <h2 className="text-3xl left-6 font-bold text-center mb-3">
              Men Category
            </h2>
            <ul className="text-lg list-disc list-inside space-y-1">
              <li>Open to men (16 yrs and above)</li>
              <li>Distance: 5 km</li>
              <li>Guardians for kids under 12</li>
              <li>Official bib & T-shirt required</li>
              <li>Finish within 5 hrs</li>
            </ul>
            <p className="mt-6 text-[20px] text-red-700 text-center font-bold italic">
              Click to view prizes
            </p>
          </PopoverTrigger>
          <PopoverContent className="w-auto max-w-sm h-auto p-6 rounded-xl shadow-lg bg-yellow-100 text-yellow-900 md:w-200 ">
            <h2 className="text-xl font-bold text-center mb-2">Men - Prizes</h2>
            <PopoverCloseButton className="absolute top-2 right-2" />
            <div className="grid grid-cols-2 gap-2 text-lg">
              <div className="space-y-1">
                <p>🥇 1st - ₹10,000</p>
                <p>🥈 2nd - ₹7,000</p>
                <p>🥉 3rd - ₹5,000</p>
                <p>4th - ₹3,000</p>
                <p>5th - ₹2,000</p>
              </div>
              <div className="space-y-1">
                <p>6th - ₹1,000</p>
                <p>7th - ₹1,000</p>
                <p>8th - ₹1,000</p>
                <p>9th - ₹1,000</p>
                <p>10th - ₹1,000</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-200 rounded-md text-center">
              <p className="font-semibold">Additional Rewards</p>
              <p>🏅 Top 50 Finishers: Shields</p>
            </div>
          </PopoverContent>
        </PopoverRoot>

        {/* Women & Children Popover */}
        <PopoverRoot>
          <PopoverTrigger className="w-60 md:w-100 h-auto p-6 justify-center items-center rounded-2xl shadow-lg bg-orange-100 text-orange-900 hover:bg-yellow-200 ">
            <h2 className="text-3xl font-bold text-center mb-3">
              Women & Children
            </h2>
            <ul className="text-lg list-disc list-inside space-y-1">
              <li>Open to women & children (8-15 yrs)</li>
              <li>Distance: 5 km</li>
              <li>Guardians for kids under 12</li>
              <li>Official bib & T-shirt required</li>
              <li>Finish within 5 hrs</li>
            </ul>
            <p className="mt-6 text-[20px] text-red-700 font-bold text-center italic">
              Click to view prizes
            </p>
          </PopoverTrigger>
          <PopoverContent className="w-auto max-w-sm h-auto p-6 rounded-xl shadow-lg bg-yellow-100 text-yellow-900 md:w-100">
            <h2 className="text-xl font-bold text-center mb-2">
              Women & Children - Prizes
            </h2>
            <PopoverCloseButton className="absolute top-2 right-2" />
            <div className="grid grid-cols-2 gap-2 text-lg">
              <div className="space-y-1">
                <p>🥇 1st - ₹10,000</p>
                <p>🥈 2nd - ₹7,000</p>
                <p>🥉 3rd - ₹5,000</p>
                <p>4th - ₹3,000</p>
                <p>5th - ₹2,000</p>
              </div>
              <div className="space-y-1">
                <p>6th - ₹1,000</p>
                <p>7th - ₹1,000</p>
                <p>8th - ₹1,000</p>
                <p>9th - ₹1,000</p>
                <p>10th - ₹1,000</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-200 rounded-md text-center">
              <p className="font-semibold">Additional Rewards</p>
              <p>🏅 Top 50 Finishers: Shields</p>
            </div>
          </PopoverContent>
        </PopoverRoot>
      </div>

      {/* Merchandise and Other Details */}
      <div className="flex flex-col items-center mt-10 w-full">
        <h2 className="mb-6 text-3xl font-bold text-orange-900 text-center">
          Get our exclusives and much more
        </h2>
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {items.map((item, index) => (
            <div
              className="flex flex-col items-center rounded-2xl p-6 w-48   transition-all group"
              key={index}
            >
              <img
                src={item.logo}
                alt={item.text}
                className="w-20 h-20 object-contain transition-transform duration-300 -translate-y-3 group-hover:-translate-y-5"
              />
              <p className="text-center text-lg font-medium text-orange-800 mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
