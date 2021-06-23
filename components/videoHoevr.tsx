import HoverVideoPlayer from 'react-hover-video-player';

export default function Videohover ({url}) {
  return (
    <HoverVideoPlayer
    
      videoSrc={[{src:"https://db336d2d3fd5.ngrok.io/api/"+url.source,
      // The MIME type of this source
      type: 'video/mp4'}]}
      pausedOverlay={
        <img
          src={"https://db336d2d3fd5.ngrok.io/api/"+url.miniature}
          alt=""
          style={{
   
         
          }}
        />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      }
    />
  );
}