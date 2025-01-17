'use client';

import clsx from 'clsx';
import VideoCard from '../video_card';
import { getGridStyles } from './helpers';
import React, { useEffect, useState } from 'react';
import getYoutubeVideos from '@/api/youtube_vids';
import { YoutubeVideoList } from '@/api/types';
import { VideoData } from './types';

const Videos = (): React.ReactElement => {
  const [videoData, setVideoData] = useState<VideoData[]>([]);

  useEffect(() => {
    getYoutubeVideos()
      .then((data) => {
        setVideoData(transfromData(data.items));
      })
      .catch();
  }, []);

  const transfromData = (data: YoutubeVideoList['items']) => {
    return data.map((item) => {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high,
      };
    });
  };

  const renderVideo = (): React.ReactElement[] => {
    if (!videoData.length) return [];

    const visualContentOnly = videoData.filter(
      (item) => item.videoId !== undefined
    );

    return visualContentOnly.map((video, idx) => {
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
