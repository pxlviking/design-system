import './OfferCard.css';
import instagramIcon from './icons8-instagram-50 2.svg';
import snapchatIcon from './icons8-snapchat-circled-logo-50 1.svg';
import tiktokIcon from './icons8-tiktok-50 2.svg';
import youtubeIcon from './icons8-youtube-50 2.svg';
import calendarIcon from './ic-calendar.svg';

const platformIcons: Record<string, string> = {
  instagram: instagramIcon,
  snapchat: snapchatIcon,
  tiktok: tiktokIcon,
  youtube: youtubeIcon,
};

interface OfferCardProps {
  brandName: string;
  title: string;
  description: string;
  publishedDate: string;
  daysLeft: number;
  imageSrc: string;
  platforms?: ('instagram' | 'snapchat' | 'tiktok' | 'youtube')[];
}

export const OfferCard = ({
  brandName,
  title,
  description,
  publishedDate,
  daysLeft,
  imageSrc,
  platforms = [],
}: OfferCardProps) => {
  return (
    <div className="offer-card">
<div className="card-header-row">
  <div className="card-header-left">
    <div className="text-wrapper">By</div>
    <div className="avatar-placeholder" />
    <div className="text-and-supporting">
      <div className="text">{brandName}</div>
    </div>
  </div>
  <div className="card-header-right">
    <span className="arrow-icon">→</span>
  </div>
</div>

      <div className="header">
        <div className="image-container">
        <img className="offer-image" src={imageSrc} alt={title} />
        </div>
        <div className="div">
          <p className="p">{title}</p>
          <p className="text-wrapper-2">{description}</p>
        </div>
      </div>

      {platforms.length > 0 && (
        <div className="platforms">
          {platforms.map((platform) => (
            <img
              key={platform}
              src={platformIcons[platform]}
              alt={platform}
              className="platform-icon"
            />
          ))}
        </div>
      )}


      <div className="column">
        <div className="container">
          <div className="text-wrapper-3">{publishedDate}</div>
        </div>
        <div className="container">
  <img src={calendarIcon} alt="calendar" className="calendar-icon" />
  <div className="text-wrapper-3">{daysLeft} days left</div>
</div>    </div>
    </div>
  );
};