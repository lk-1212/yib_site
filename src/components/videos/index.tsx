import clsx from 'clsx';
import VideoCard from '../video_card';
import { VIDEOS } from './constants';
import { getGridStyles } from './helpers';

const Videos = () => {
  const numberOfVideos = VIDEOS.length;
  const renderVideos = VIDEOS.map((video, index) => {
    return (
      <div className="p-5" key={index}>
        <VideoCard
          preview={video.preview}
          title={video.title}
          duration={video.duration}
        />
      </div>
    );
  });
  return (
    <div className={clsx('grid', getGridStyles(numberOfVideos))}>
      {renderVideos}
    </div>
  );
};

// flex flex-col md:flex-row

export default Videos;
