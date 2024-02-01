import React from 'react'

export default function Youtube(props) {

  const youtubeURL = `https://www.youtube.com/embed/${props.videoID}`;

  return (
    <div>
      <iframe width="560" height="315" src={youtubeURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
