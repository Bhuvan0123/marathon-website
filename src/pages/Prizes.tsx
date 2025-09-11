import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const marathonContent = [
  {
    title: "Men Category",
    description:
      "Open to all adult male runners. Compete for top cash prizes in 10 ranks!",
    content: (
      <div className="p-4 text-black">
        <h3 className="text-xl font-bold mb-2 text-center">Men</h3>
        <div className="grid grid-cols-2 gap-2">
          <ul className="list-disc list-inside space-y-1">
            <li>1. $5000</li>
            <li>2. $3000</li>
            <li>3. $2000</li>
            <li>4. $1500</li>
            <li>5. $1000</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>6. $800</li>
            <li>7. $500</li>
            <li>8. $300</li>
            <li>9. $200</li>
            <li>10. $100</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Women & Children (10-15)",
    description:
      "Open to adult women and children aged 10–15. Compete for top cash prizes in 10 ranks!",
    content: (
      <div className="p-4 text-black">
        <h3 className="text-xl font-bold mb-2 text-center">Women & Children</h3>
        <div className="grid grid-cols-2 gap-2">
          <ul className="list-disc list-inside space-y-1">
            <li>1. $5000</li>
            <li>2. $3000</li>
            <li>3. $2000</li>
            <li>4. $1500</li>
            <li>5. $1000</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>6. $800</li>
            <li>7. $500</li>
            <li>8. $300</li>
            <li>9. $200</li>
            <li>10. $100</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const Prizes = () => {
  return (
    <div className="bg-yellow-200">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Marathon Registration
      </h1>

      <StickyScroll
        content={marathonContent}
        contentClassName="text-black"
      />
    </div>
  );
};

export default Prizes;
