import Image from 'next/image';
import ImageSectionText from '../image_section_text/index';

const MainImageSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <ImageSectionText />
      <Image
        src={'/images/IMG_2691.jpg'}
        width={200}
        height={200}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MainImageSection;
