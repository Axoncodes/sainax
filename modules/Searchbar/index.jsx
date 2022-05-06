import style from './style.module.css'
import { useEffect, useState } from 'react'

export default function Searchbar({ hideAtTop, placeholder='Search...'}) {
  const [all_posts_names, setAll_posts_names] = useState([])
  const [all_posts_links, setAll_posts_links] = useState([])
  useEffect(() => {
    serachHandler()
  }, [])
  
  useEffect(() => {
    window['all_posts_names'] = all_posts_names;
    window['all_posts_links'] = all_posts_links;
  }, [all_posts_names, all_posts_links])
  
  const serachHandler = async () => {
    const icons = await fetch(`${process.env.RexfontAPI}/icons/`).then(res => res.json())
    setAll_posts_names(icons.map(icon => icon.name))
    setAll_posts_links(icons.map(icon => `/icons/${icon.name}/${icon.style}`))
  }
  
  return (
    <axg-element
      placeholder={placeholder}
      mode="searchbar"
      inputColor="var(--bg3)"
      hideAtTop={hideAtTop}
    ></axg-element>
  )
}