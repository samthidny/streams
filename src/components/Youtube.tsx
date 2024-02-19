import React from 'react'

type YouTubeProps = {
  videoID: string
}

export default function Youtube(props: YouTubeProps) {

  const youtubeURL = `https://www.youtube.com/embed/${props.videoID}`;

  return (
    <div>
      <iframe width="560" height="315" src={youtubeURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}