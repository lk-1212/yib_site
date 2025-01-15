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

  console.log(videoData)

  // I've upated the API to return all the videos available on the
  // now I need to update the code tor return the data correctly
  // according to the structure of the json

  const transfromData = (data:any) => {
    // for(const item of)

    return(
      data.map((item:any) => {
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high,
        }
      })
    )
  }

  const renderVideo = () => {
    if(!videoData.length) return []
    return videoData.map((video:any, idx:number)  => {
    return (
      <div className="p-5" key={idx}>
        <VideoCard
          preview={video.thumbnail.url}
          title={video.title}
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
};


export default Videos;
