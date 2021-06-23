import React from 'react'
import PropTypes from 'prop-types'


const VideoThumbnail = ({
  preview,
  title,
  message,
  badge,
  badgeBg,
  muted,
  width,
  classname,
  
}) => {
  const onHover = e => {
    e.target.play()
    e.target.nextElementSibling.style.opacity = 0.4
  }

  const offHover = e => {
    e.target.pause()
    e.target.nextElementSibling.style.opacity = 1
  }

  return (
    <div
      style={{ width: width }}
    >
      <div style={{ width: width }} >
        <video
          onMouseEnter={e => onHover(e)}
          onMouseLeave={e => offHover(e)}
          src={preview}
          loop
          // autoPlay
          width={width}
          muted={muted}
        />
        <div style={{ background: badgeBg }}>
          {badge}
        </div>
      </div>
      <h4 >{title}</h4>
      <span >{message}</span>
    </div>
  )
}

VideoThumbnail.propTypes = {
  preview: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  badge: PropTypes.string,
  badgeBg: PropTypes.string,
  muted: PropTypes.bool,
  width: PropTypes.number,
  classname: PropTypes.string
}

VideoThumbnail.defaultProps = {
  
  muted: true,
  width: 320,
  classname: ''
}

export default VideoThumbnail
