export default function ContactForm() {
  return (
    <div className="p-8 rounded-2xl bg-gray-50">
      <form className="space-y-6">
        <input placeholder="Your Name" required className="w-full px-6 py-4 rounded-xl border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300" type="text" name="name" />
        <input placeholder="Your Email" required className="w-full px-6 py-4 rounded-xl border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300" type="email" name="email" />
        <select name="subject" className="w-full px-6 py-4 rounded-xl border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300">
          <option value="General Inquiry">General Inquiry</option>
          <option value="Event Submission">Event Submission</option>
          <option value="Partnership">Partnership</option>
          <option value="Support">Support</option>
        </select>
        <textarea name="message" placeholder="Your Message" required rows="6" className="w-full px-6 py-4 rounded-xl border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk transition-all duration-300"></textarea>
        <button type="submit" className="w-full px-8 py-4 bg-[#FFD700] text-black rounded-xl hover:bg-[#FFC700] transition-all duration-300 font-space-grotesk text-lg hover:shadow-xl transform hover:-translate-y-1">Send Message</button>
      </form>
    </div>
  );
}