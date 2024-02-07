import React, { useEffect, useState } from 'react'
import { TMDB } from '../apis/TMDB';
import { ReelCard } from './ReelCard';

export default function ReelCardLoader(props) {

  const [details, setDetails] = useState({});

  useEffect(() => {

      TMDB.getDetails(props.title.id).then(details => {
          return setDetails(details)  
      } );

      return () => {
          console.log('Destroy function Title');
      }

  }, [])


  return (
    <div>
      <span>{props.title.id}</span>
      <ReelCard title={details} />
    </div>
  )
}
