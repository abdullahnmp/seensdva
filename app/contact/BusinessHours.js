export default function BusinessHours() {
  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gray-50 shadow-md"> {/* Added shadow and responsive padding */}
      <h2 className="text-xl sm:text-2xl font-space-grotesk font-bold mb-4 sm:mb-6">Business Hours</h2> {/* Responsive text size and margin */}
      <div className="space-y-2 sm:space-y-3"> {/* Responsive spacing */}
        <div className="flex justify-between items-center"> {/* Added items-center */}
          <span className="text-gray-600 text-sm sm:text-base">Monday - Friday</span> {/* Responsive text size */}
          <span className="font-bold text-sm sm:text-base">9:00 AM - 6:00 PM</span> {/* Responsive text size */}
        </div>
        <div className="flex justify-between items-center"> {/* Added items-center */}
          <span className="text-gray-600 text-sm sm:text-base">Saturday</span> {/* Responsive text size */}
          <span className="font-bold text-sm sm:text-base">10:00 AM - 4:00 PM</span> {/* Responsive text size */}
        </div>
        <div className="flex justify-between items-center"> {/* Added items-center */}
          <span className="text-gray-600 text-sm sm:text-base">Sunday</span> {/* Responsive text size */}
          <span className="font-bold text-sm sm:text-base">Closed</span> {/* Responsive text size */}
        </div>
      </div>
    </div>
  );
}