import dynamic from "next/dynamic";
const HeaderComponent = dynamic(() => import('../../axg-react/Header'), {ssr: false,})

export default function Header() {
  return <HeaderComponent
    searchbar={false}
    SearchbarPlaceholder={"محصول خود را جستجو کنید"}
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
        options: [
          {
            title: 'سیمان تهران',
            url: '/shop/tehran-cement',
            level: 'undertab',
            color: '#fff',
            dir: 'rtl',
            content: [
              {
                title: 'سیمان پوزولانی (تیپ 1)',
                url: '/shop/tehran-cement/type-1',
                level: 'undertab',
                color: '#fff',
                dir: 'rtl',
              },
              {
                title: 'تیپ 2',
                url: '/shop/tehran-cement/type-1',
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
        link: '/contact',
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
        link: '/about',
        color: 'var(--primaryColor)',
        activeColor: 'var(--tertiaryTextColor)',
        activeBg: 'var(--primaryColor)',
        dir: 'rtl',
      },
    ]}
  />
}
