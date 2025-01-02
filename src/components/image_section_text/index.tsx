import { TEXT } from './constants';

const ImageSectionText = () => {
  return (
    <div className="absolute px-10 lg:relative">
      <p className="text-center text-[20px] italic text-green-900 py-3 font-extrabold mt-[100px] lg:mt-0 lg:text-stone-300 lg:text-[50px] lg:bg-transparent">
        {TEXT}
      </p>
    </div>
  );
};

export default ImageSectionText;
