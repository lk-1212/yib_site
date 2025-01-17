import { YOUTUBE_CONTENT } from './constants';

const UploadsHeader = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-stone-200 text-black">
      <h2 className="text-[30px] font-bold">{YOUTUBE_CONTENT}</h2>
    </div>
  );
};

export default UploadsHeader;
