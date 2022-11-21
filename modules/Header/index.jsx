import dynamic from "next/dynamic";
import { useState } from "react";
import { useEffect } from "react";
import { fetchposts } from '../../lib/posts'
const HeaderComponent = dynamic(() => import('../../axg-react/Header'), {ssr: false,})

export default function Header() {
  const [posts, setPosts] = useState([])
  useEffect(() => {fetchposts().then(posts =>setPosts(posts))}, [])
  useEffect(() => {
    searchQueries['mainsearchquery'] = {searchquerynames: posts.map(post => post.title), searchquerylinks: posts.map(post => post.link),}
    !!window['searchbarV2Handler'] ? searchbarV2Handler() : null
  }, [posts])
  return <HeaderComponent
    SearchbarPlaceholder={"محصول خود را جستجو کنید"}
    searchbar = {{
      id: 'main_searchbar',
      name: 'main_searchbar',
      inputcustomclasses: 'font_l1 rtl wide padding_l3 noborder round_l3',
      customclasses: 'rtl wide',
      bg: '#c1c1c1a3',
      color: '#000',
      placeholder: 'جستجو را شروع کنید...',
      queryid: 'mainsearchquery',
      collapseonmobile: '1',
      dir: 'rtl',
      labelclasses: 'subcontainer lefty hoversearchcoverlabel',
      inputcovercustomclasses: 'subcontainer vertical',
      reslistcustomclasses: 'boxshadow darker rtl',
    }}
    dir={'rtl'}
    menuGroup={{
      headTitlecolor: '#ededed',
      height: '50',
      color: 'var(--primaryTextColor)',
      colorHover: '#fff',
      activeBackground: 'var(--primaryColor)',
      headBackground: '#0000',
      headBackgroundHover: '#575757',
      title: 'منو',
      background: '#ededed',
      subOpening: 'sub',
      subTrigger: 'click',
      dropdownid: 'mainHeaderGroup',
    }}
    menuItems={[
      {
        structure: 'link',
        name: 'خانه',
        link: '/',
        color: 'var(--primaryColor)',
        activeColor: 'var(--tertiaryTextColor)',
        activeBg: 'var(--primaryColor)',
        dir: 'rtl',
      },
      {
        targetLocator: 'shoplocator',
        structure: 'mega singletab',
        name: 'فروشگاه',
        color: 'var(--primaryColor)',
        activeColor: 'var(--tertiaryTextColor)',
        activeBg: 'var(--primaryColor)',
        subtrigger: 'click',
        subopening: 'sub',
        background: 'var(--primaryColor)',
        dir: 'rtl',
        exit: '1',
        options: [
          {
            title: 'سیمان تهران',
            url: '/shop/tehran-cement',
            level: 'undertab',
            color: 'var(--secondaryColor)',
            fontsize: 'var(--l7-text-fontSize)',
            dir: 'rtl',
            content: [
              {
                title: 'سیمان پوزولانی (تیپ 1)',
                url: '/shop/tehran-cement/type-1',
                level: 'undertab',
                color: '#fff',
                dir: 'rtl',
                activeBg: 'var(--secondaryColor)',
              },
              {
                title: 'تیپ 2',
                url: '/shop/tehran-cement/type-2',
                level: 'undertab',
                color: '#fff',
                dir: 'rtl',
              },
            ]
          },
        ]
      },
      {
        structure: 'link',
        name: 'تماس با ما',
        link: '/contact-us',
        color: 'var(--primaryColor)',
        activeColor: 'var(--tertiaryTextColor)',
        activeBg: 'var(--primaryColor)',
        dir: 'rtl',
      },
      {
        structure: 'link',
        name: 'وبلاگ',
        link: '/blog',
        color: 'var(--primaryColor)',
        activeColor: 'var(--tertiaryTextColor)',
        activeBg: 'var(--primaryColor)',
        dir: 'rtl',
      },
      {
        structure: 'link',
        name: 'درباره ساینا',
        link: '/about-us',
        color: 'var(--primaryColor)',
        activeColor: 'var(--tertiaryTextColor)',
        activeBg: 'var(--primaryColor)',
        dir: 'rtl',
      },
    ]}
  />
}
