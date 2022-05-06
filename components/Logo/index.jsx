import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'

export default function Logo({src}) {
  return (
    <Link href="/">
      <a className={style.headerLogo}>
        <Image layout='fixed' width="90" height="50" src={src} alt="logo" />
      </a>
    </Link>
  )
}