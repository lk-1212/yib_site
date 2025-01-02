'use client'

import clsx from 'clsx';
import VideoCard from '../video_card';
// import { VIDEOS } from './constants';
import { getGridStyles } from './helpers';
import { useEffect, useState } from 'react';
import getYoutubeVideos from '@/api/youtube_vids';

const Videos = () => {
  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    getYoutubeVideos().then(data => {setVideoData(transfromData(data.items))}).catch()

  }, [])

  const transfromData = (data:any) => {
    return(
      data.map((item:any) => {
        return {
          videoId: item.id,
          title: item.snippet.localized.title,
          thumbnail: item.snippet.thumbnails.maxres,
          duration: item.contentDetails.duration
        }
      })
    )
  }

  const renderVideo = () => {
    if(!videoData.length) return []
    // loreto cut the PT from the time on the duration
    return videoData.map((video:any, idx:number)  => {
    return (
      <div className="p-5" key={idx}>
        <VideoCard
          preview={video.thumbnail.url}
          title={video.title}
          duration={video.duration}
          videoId={video.videoId}
        />
      </div>
    )} )
  }

  return (
    <div className={clsx('grid', getGridStyles(videoData.length))}>
      {renderVideo()}
    </div>
  );
  // const numberOfVideos = VIDEOS.length;
  // const renderVideos = VIDEOS.map((video, index) => {
  //   return (
  //     <div className="p-5" key={index}>
  //       <VideoCard
  //         preview={video.preview}
  //         title={video.title}
  //         duration={video.duration}
  //       />
  //     </div>
  //   );
  // });
  // return (
  //   <div className={clsx('grid', getGridStyles(numberOfVideos))}>
  //     {renderVideos}
  //   </div>
  // );
};

// flex flex-col md:flex-row

export default Videos;
