const getYoutubeVideos = async (): Promise<void | {}> => {
  return await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCjhI0jfC_91uyP1WrWFUmyA&key=AIzaSyCcK1pgu_x_jsBw_8SiJtrhhYU00jS7uic`
  )
    .then((data) => data.json())
    .then((videoList) => videoList);
};

export default getYoutubeVideos;
