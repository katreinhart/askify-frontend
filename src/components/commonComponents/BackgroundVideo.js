import React from 'react'

const BackgroundVideo = () => (
  <div className="signin-homepage-video-section">
  <div className="video-background hidden-sm hidden-xs">
    <video preload="true" autoPlay="true" loop="true" className="video" poster="https://s3-us-west-2.amazonaws.com/dotcom-files/video_hero_bg_poster.png">
      <source src="https://s3-us-west-2.amazonaws.com/dotcom-files/hero_video.mp4" type="video/mp4" />
    </video>
    <div className="signin-overlay"></div>
  </div>

</div>
)

export default BackgroundVideo