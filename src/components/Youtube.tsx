import React from 'react'
import './Youtube.css';
type YoutubeProps = {
  videoID: string
}

export default function Youtube(props: YoutubeProps) {

  const youtubeURL = `https://www.youtube.com/embed/${props.videoID}`;

  return (
    <div className="youtube">
      <iframe width="560" height="315" src={youtubeURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}
