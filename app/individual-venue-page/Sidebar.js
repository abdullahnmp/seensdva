// app/components/Sidebar.js
import Button from "./Button";
import SocialIcon from "./SocialIcon";
import { FaFacebook, FaInstagram, FaTiktok , FaWhatsapp, FaUsers, FaStar } from 'react-icons/fa';

const Sidebar = ({ capacity, musicTypes, rating, socialLinks, websiteLink }) => {
  const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    let stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={`filled-${i}`} className="text-[#FFD700]" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-[#FFD700]" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${filledStars + (hasHalfStar ? 1 : 0) + i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="sticky top-24 bg-gray-50 p-6 rounded-xl">
      <div className="space-y-6">
        <div>
          <h3 className="font-space-grotesk font-bold mb-2">Capacity</h3>
          <p className="flex items-center gap-2">
            <FaUsers className="text-[#FFD700]" aria-hidden="true" />
            {capacity}
          </p>
        </div>
        <div>
          <h3 className="font-space-grotesk font-bold mb-2">Music Types</h3>
          <div className="flex flex-wrap gap-2">
            {musicTypes.map((type, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gray-200"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-space-grotesk font-bold mb-2">Rating</h3>
          <div className="flex items-center gap-2">
            <span className="text-[#FFD700] text-2xl">{rating}</span>
            <div className="flex text-[#FFD700]">
              {renderRatingStars(parseFloat(rating))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-space-grotesk font-bold mb-2">Connect</h3>
          <div className="flex gap-4">
            <SocialIcon href={socialLinks[0].href} bgColor="bg-[#1877F2]">
              <FaFacebook aria-hidden="true" />
            </SocialIcon>
            <SocialIcon href={socialLinks[1].href} bgColor="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]">
              <FaInstagram aria-hidden="true" />
            </SocialIcon>
            <SocialIcon href={socialLinks[2].href} bgColor="bg-[#000000]">
              <FaTiktok  aria-hidden="true" />
            </SocialIcon>
            <SocialIcon href={socialLinks[3].href} bgColor="bg-[#25D366]">
              <FaWhatsapp aria-hidden="true" />
            </SocialIcon>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button href={websiteLink} target="_blank" rel="noopener noreferrer" className="text-center">Visit Website</Button>
          {/* <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700]">Book Venue</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;