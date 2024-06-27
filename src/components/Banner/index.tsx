import "./Banner.css";

interface BannerProps {
  imageSrc: string;
  altText?: string;
}

const Banner = ({ imageSrc, altText }: BannerProps) => {
  return (
    <header className="banner">
      <img src={imageSrc} alt={altText} />
    </header>
  );
};

export default Banner;
