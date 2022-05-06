import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
import Searchbar from '../../modules/Searchbar'
import style from './style.module.css'

export default function Header({menu}) {
  return (
    <header className={style.header}>
      <Logo src="/images/logo.png" />
      <Searchbar placeholder="...جستجو کنید" hideAtTop={false}/>
      <Menu menuItems={menu} />
    </header>
  )
}