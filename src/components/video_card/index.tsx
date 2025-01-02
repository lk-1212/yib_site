import Image from 'next/image';
import { VideoCardProps } from './types';

const VideoCard = ({ preview, title, duration, videoId }: VideoCardProps) => {
  const youtubeVidLink = `https://www.youtube.com/watch?v=${videoId}`
  
  return (
    <div className="min-w-[200px] border-solid border-2 border-white rounded-md">
      <a href={youtubeVidLink}>
      <div className="">
        <Image
          src={preview}
          width={100}
          height={100}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between pt-3 border-t-2 border-t-white hover:underline">
        <p className='lg:px-3'>{title}</p>
        <p className='lg:px-3'>{duration}</p>
      </div>
      </a>
    </div>
  );
};

export default VideoCard;
