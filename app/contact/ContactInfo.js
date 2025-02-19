import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="p-8 rounded-2xl bg-gray-50">
      <h2 className="text-2xl font-space-grotesk font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-[#FFD700] mt-1" />
          <div>
            <h3 className="font-space-grotesk font-bold">Office Location</h3>
            <p className="text-gray-600">123 Beach Road<br />Seminyak, Bali<br />Indonesia 80361</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-[#FFD700] mt-1" />
          <div>
            <h3 className="font-space-grotesk font-bold">Email Us</h3>
            <div className="space-y-3">
              <p className="text-gray-600">Solve this simple math problem to reveal our email:</p>
              <div className="flex items-center gap-3">
                <span className="font-bold">3 + 6 = ?</span>
                <input className="w-20 px-3 py-2 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" type="text" defaultValue="9" />
                <button className="px-4 py-2 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFC700] transition-all duration-300">Verify</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaPhone className="text-[#FFD700] mt-1" />
          <div>
            <h3 className="font-space-grotesk font-bold">Call Us</h3>
            <a href="tel:+62123456789" className="text-gray-600 hover:text-[#FFD700] transition-colors">+62 123 456 789</a>
          </div>
        </div>
      </div>
    </div>
  );
}