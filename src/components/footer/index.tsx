import Image from '../../../node_modules/next/image';

import { SOCIALS } from './constants';

const Footer = () => {
  const renderSocialIcons = () => {
    const renderSocials = SOCIALS.map((item, index) => {
      return (
        <a href={item.href} key={index}>
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.name}
          />
        </a>
      );
    });
    return renderSocials;
  };
  return (
    // <div className="grid grid-rows-1 ">
    <div className="grid grid-cols-3 grid-rows-1 place-items-center p-4 ">
      {renderSocialIcons()}
    </div>
    // </div>
  );
};

export default Footer;

// absolute inset-x-0 bottom-0
