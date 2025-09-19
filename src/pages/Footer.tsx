import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Footer(){
  return (
    <footer className="w-full bg-yellow-400 text-black">
      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">ALAMA ABACUS</h2>

        <div className="mb-4">
          <p className="mb-2 flex items-center justify-center gap-2">
            <FaMapMarkerAlt />
            No: 1A TKT Complex, Krishna Nagar, Vellore 632 001, TAMILNADU
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:7092377999" className="hover:underline">
                70923 77999
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:9344435111" className="hover:underline">
                93444 35111
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:8678951928" className="hover:underline">
                86789 51928
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip full width */}
      <div className="w-full text-center border-t border-black mt-10 pt-4">
        <p>
          &copy; {new Date().getFullYear()} ALAMA ABACUS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
