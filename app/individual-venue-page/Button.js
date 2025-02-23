// app/components/Button.js
const Button = ({ children, href, onClick, target, rel , className }) => {
    const baseClasses = "inline-flex items-center gap-2 px-6 py-3 bg-[#121212] text-white rounded-xl hover:bg-[#2a2a2a] transition-all duration-300";
    return href ? (
      <a href={href}  target={target} rel={rel} className={`${baseClasses} ${className}`}>{children}</a>
    ) : (
      <button onClick={onClick} className={`${baseClasses} ${className}`}>{children}</button>
    );
  };
  
  export default Button;