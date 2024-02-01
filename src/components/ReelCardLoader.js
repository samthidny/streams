import React from 'react'

export default function ReelCardLoader(props) {


    
  return (
    <div>
        <p>{props.title.original_title}</p>
      <p>Reel Card Loader ${JSON.stringify(props.title)}</p>
    </div>
  )
}
