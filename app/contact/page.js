import { FaHandshake } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import BusinessHours from './BusinessHours';
import Map from './Map';

export default function Contact() {
  return (
    <main className="">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-20"></div>
            </div>
            <div className="relative text-center">
              <FaHandshake className="text-[#FFD700] text-4xl mb-4 animate-wave mx-auto" />
              <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">Let's Connect</h1>
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-gray-600">Have a question or want to work together? We'd love to hear from you. Our team is ready to help bring your vision to life.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <ContactInfo />
              <Map />
              <BusinessHours />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}