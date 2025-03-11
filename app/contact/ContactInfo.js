import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gray-50 shadow-md"> {/* Responsive padding and shadow */}
      <h2 className="text-xl sm:text-2xl font-space-grotesk font-bold mb-4 sm:mb-6">Contact Information</h2> {/* Responsive text size and margin */}
      <div className="space-y-4 sm:space-y-6"> {/* Responsive spacing */}

        {/* Office Location */}
        <div className="flex items-start gap-2 sm:gap-4"> {/* Responsive gap */}
          <FaMapMarkerAlt className="text-[#FFD700] mt-1" size={20} /> {/* Adjusted Size */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg">Office Location</h3> {/* Adjusted Size */}
            <p className="text-gray-600 text-sm sm:text-base"> {/* Responsive text size */}
              123 Beach Road<br />
              Seminyak, Bali<br />
              Indonesia 80361
            </p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-start gap-2 sm:gap-4"> {/* Responsive gap */}
          <FaEnvelope className="text-[#FFD700] mt-1" size={20} /> {/* Adjusted Size */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg">Email Us</h3> {/* Adjusted Size */}
            <div className="space-y-2 sm:space-y-3"> {/* Responsive spacing */}
              <p className="text-gray-600 text-sm sm:text-base">Solve this simple math problem to reveal our email:</p> {/* Responsive text size */}
              <div className="flex items-center gap-1 sm:gap-3 flex-wrap"> {/* Responsive gap and flex wrap */}
                <span className="font-bold text-sm sm:text-base">3 + 6 = ?</span> {/* Responsive text size */}
                <input className="w-16 sm:w-20 px-2 sm:px-3 py-1 sm:py-2 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm" type="text" defaultValue="9" /> {/* Responsive width and padding and text size */}
                <button className="px-3 sm:px-4 py-1 sm:py-2 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-all duration-300 text-sm">Verify</button> {/* Responsive padding and text size */}
              </div>
            </div>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-start gap-2 sm:gap-4"> {/* Responsive gap */}
          <FaPhone className="text-[#FFD700] mt-1" size={20} /> {/* Adjusted Size */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg">Call Us</h3> {/* Adjusted Size */}
            <a href="tel:+62123456789" className="text-gray-600 text-sm sm:text-base hover:text-[#FFD700] transition-colors"> {/* Responsive text size */}
              +62 123 456 789
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}