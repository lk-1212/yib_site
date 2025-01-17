'use client';

import clsx from 'clsx';
import VideoCard from '../video_card';
import { getGridStyles } from './helpers';
import { useEffect, useState } from 'react';
import getYoutubeVideos from '@/api/youtube_vids';

const Videos = (): React.ReactElement => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getYoutubeVideos()
      .then((data) => {
        setVideoData(transfromData(data.items));
      })
      .catch();
  }, []);

  const transfromData = (data: any) => {
    return data.map((item: any) => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high,
      };
    });
  };

  const renderVideo = () => {
    if (!videoData.length) return [];
    const visualContentOnly = videoData.filter(
      (item) => item.videoId !== undefined
    );

    return visualContentOnly.map((video: any, idx: number) => {
      return (
        <div className="p-5" key={idx}>
          <VideoCard
            preview={video.thumbnail.url}
            title={video.title}
            videoId={video.videoId}
          />
        </div>
      );
    });
  };

  return (
    <div className={clsx('grid', getGridStyles(videoData.length))}>
      {renderVideo()}
    </div>
  );
};

export default Videos;
