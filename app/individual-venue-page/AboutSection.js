// app/components/AboutSection.js
import SectionTitle from "./SectionTitle";

const AboutSection = ({ aboutText }) => {
  return (
    <section>
      <SectionTitle>About</SectionTitle>
      <p className="text-lg leading-relaxed text-gray-700">{aboutText}</p>
    </section>
  );
};

export default AboutSection;