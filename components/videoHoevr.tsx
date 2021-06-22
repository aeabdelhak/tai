import HoverVideoPlayer from 'react-hover-video-player';

export default function Videohover ({url}) {
  return (
    <HoverVideoPlayer
      videoSrc={url}
      pausedOverlay={
        <img
          src="thumbnail-image.jpg"
          alt=""
          style={{
   
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      }
    />
  );
}