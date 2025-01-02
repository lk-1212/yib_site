const getYoutubeVideos = async (): Promise<void | {}> => {
    const api_key = 'AIzaSyCcK1pgu_x_jsBw_8SiJtrhhYU00jS7uic'

    return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=FT0TBJk6DYA&key=AIzaSyCcK1pgu_x_jsBw_8SiJtrhhYU00jS7uic`)
    .then(data => data.json())
    .then(videoList => videoList)
    
}

export default getYoutubeVideos