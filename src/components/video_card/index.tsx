import Image from 'next/image';
import { VideoCardProps } from './types';

const VideoCard = ({ preview, title, videoId }: VideoCardProps) => {
  const youtubeVidLink = `https://www.youtube.com/watch?v=${videoId}`;

  if (!videoId) return null;

  return (
    <div className="min-w-[200px] rounded-md">
      <a href={youtubeVidLink}>
        <div className="rounded-lg border-2 border-white p-2">
          <Image
            src={preview}
            width={100}
            height={100}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-3 hover:underline lg:flex-row">
          <p className="flex text-center lg:px-3">{title}</p>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
