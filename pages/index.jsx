import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Intro from '../modules/Intro'

export default function Home({}) {
  const router = useRouter();
  useEffect(() => {
    if (window.location.pathname != router.pathname) router.push(`/${window.location.pathname}`)
  })

  return (
    <>
      <Intro mainText="This is THE WEBX" subText="Grow your business" />
    </>
  )
}