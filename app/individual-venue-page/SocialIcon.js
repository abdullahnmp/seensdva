// app/components/SocialIcon.js
const SocialIcon = ({ href, children, bgColor }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 ${bgColor} text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
      >
        {children}
      </a>
    );
  };

  export default SocialIcon;