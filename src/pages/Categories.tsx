import {
  PopoverCloseButton,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/pop-over"
import medalLogo from '../assets/icons/finisher-medal.png';
import tshirtLogo from '../assets/icons/race-jersey.png';
import certificateLogo from '../assets/icons/timing-certificate.png';
import breakfastLogo from '../assets/icons/food_2771460.png';
export default function Categories() {
  const items = [
    { logo: medalLogo, text: 'A dazzling finisher’s medal' },
    { logo: tshirtLogo, text: 'Official race-day T-shirt' },
    { logo: certificateLogo, text: 'Certificate for all finishers' },
    { logo: breakfastLogo, text: 'Breakfast & Refreshments' }
  ];

  return (
    <section id="category" className="mt-10 p-12 bg-amber-500 ">
      <h1 className="mb-4 text-4xl font-bold text-black">Marathon Categories</h1>
      <div className="flex flex-row justify-center gap-20 mt-15">
      <PopoverRoot>
        <PopoverTrigger className="w-100 h-auto p-5 rounded-lg shadow-md bg-orange-100 text-orange-900 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-center">Men Category</h2>
            <ul className="text-lg mt-2 list-disc list-inside">
              <li>Open to men above 16 years</li>
              <li>Distance: 8 km</li>
              <li>Official bib & T-shirt required</li>
              <li>Hydration every 2 km</li>
              <li>Finish within 5 hrs</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-orange-700 text-center">Click to view prizes</p>
        </PopoverTrigger>
        <PopoverContent className="w-110 h-auto p-4 rounded-lg shadow-lg bg-yellow-100 text-yellow-900">
            <h2 className="text-xl font-bold text-center mb-2">
              Men Category - Prizes
            </h2>
            <PopoverCloseButton className="absolute top-2 right-2"/>
            {/* Two-column prize list */}
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-2">
                <p>🥇 1st position - ₹10,000</p>
                <p>🥈 2nd position - ₹8,000</p>
                <p>🥉 3rd position - ₹6,000</p>
                <p>4th position - ₹5,000</p>
                <p>5th position - ₹4,000</p>
              </div>
              <div className="space-y-2">
                <p>6th position - ₹3,000</p>
                <p>7th position - ₹2,000</p>
                <p>8th position - ₹1,000</p>
                <p>9th position - ₹1,000</p>
                <p>10th position - ₹1,000</p>
              </div>
            </div>

            {/* ✅ Rewards section placed outside grid */}
            <div className="mt-4 p-3 rounded-md ">
              <p className="font-semibold">Additional Rewards</p>
              <p>🏅 Top 100 Finishers: Shields</p>
            </div>
            
        </PopoverContent>
      </PopoverRoot>

      {/* Second Popover */}
      <PopoverRoot>
        <PopoverTrigger className="w-100 h-auto p-5 rounded-lg shadow-md bg-orange-100 text-orange-900 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-center">Women & Children</h2>
            <ul className="text-lg mt-2 list-disc list-inside">
              <li>Open to women & children (8-15 yrs)</li>
              <li>Distance: 5 km</li>
              <li>Guardians for kids under 12</li>
              <li>Official bib & T-shirt required</li>
              <li>Finish within 5 hrs</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-orange-700 text-center">Click to view prizes</p>
        </PopoverTrigger>

        <PopoverContent className="w-110 h-auto p-4 rounded-lg shadow-lg bg-yellow-100 text-yellow-900">
            <h2 className="text-xl font-bold text-center mb-2">
              Women & Children Category - Prizes
            </h2>
            <PopoverCloseButton className="absolute top-2 right-2"/>
            {/* Two-column prize list */}
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-2">
                <p>🥇 1st position - ₹10,000</p>
                <p>🥈 2nd position - ₹8,000</p>
                <p>🥉 3rd position - ₹6,000</p>
                <p>4th position - ₹5,000</p>
                <p>5th position - ₹4,000</p>
              </div>
              <div className="space-y-2">
                <p>6th position - ₹3,000</p>
                <p>7th position - ₹2,000</p>
                <p>8th position - ₹1,000</p>
                <p>9th position - ₹1,000</p>
                <p>10th position - ₹1,000</p>
              </div>
            </div>

            {/* ✅ Rewards section placed outside grid */}
            <div className="mt-4 p-3 rounded-md ">
              <p className="font-semibold">Additional Rewards</p>
              <p>🏅 Top 100 Finishers: Shields</p>
            </div>
            
        </PopoverContent>
      </PopoverRoot>
      </div>
      <div className="flex flex-col items-center mt-12 w-full">
        <h2 className="mb-5 text-2xl font-semibold text-black text-center">Get our exclusives and much more..</h2>
        <div className="flex flex-row flex-wrap justify-center gap-10 w-full md:flex-nowrap">
          {items.map((item, index) => (
        <div
          className="flex flex-col items-center rounded-lg p-6 w-48 mb-1 md:mb-0 group"
          key={index}
        >
          <img
            src={item.logo}
            alt={item.text}
            className="w-20 h-20 object-contain transition-transform duration-300 -translate-y-5 group-hover:-translate-y-8"
          />
          <p className="text-center text-lg font-medium text-gray-800">{item.text}</p>
        </div>
          ))}
        </div>
      </div>
  </section>
);
}
