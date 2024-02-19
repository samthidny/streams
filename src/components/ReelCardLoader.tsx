import { useEffect, useState } from 'react'
import { TMDB } from '../apis/TMDB';
import { ReelCard } from './ReelCard';
import { ITitle } from '../data/ITitle';

type ReelCardLoaderProps = {
  title: ITitle
}

export default function ReelCardLoader(props: ReelCardLoaderProps) {

  const [details, setDetails] = useState<ITitle>();

  useEffect(() => {

    TMDB.getDetails(props.title.id).then(details => {
      return setDetails(details)
    });

    return () => {

    }

  }, [])


  const reelCard = details ? <ReelCard title={details} /> : '';

  return (
    <>
      {reelCard}
    </>
  )
}
