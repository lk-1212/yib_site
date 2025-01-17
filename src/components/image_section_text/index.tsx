import { TEXT } from './constants';

const ImageSectionText = () => {
  return (
    <div className="absolute px-10 lg:relative">
      <p
        style={{ textShadow: '2px -1px 0px rgba(0, 0, 0, 0.25)' }}
        className="text-center text-[20px] italic text-[#FFFBF9] py-3 font-extrabold mt-[30%] sm:text-3xl md:text-5xl lg:mt-0 lg:text-stone-300 lg:text-[50px] lg:bg-transparent"
      >
        {TEXT}
      </p>
    </div>
  );
};

export default ImageSectionText;
