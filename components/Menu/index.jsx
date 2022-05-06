export default function Menu({menuItems}) {
  return (
    <axg-element
      mode="dropdown"
      headTitlecolor="#FFF4A3"
      height="70"
      color="#282A35"
      colorHover="#fff"
      activeBackground="#282A35"
      headBackground="#0000"
      headBackgroundHover="#04AA6D"
      structure="dropdownGroup"
      title="منو"
      background="#2d2d2d"
      subOpening="sub"
      subTrigger="click"
    >
      {menuItems.map((item, key) => (
        <axg-element
          key={key}
          mode='dropdown'
          height="50"
          color='var(--light)'
          colorHover='#fff'
          activeBackground='var(--darkColor)'
          headBackground='#0000'
          headBackgroundHover='#565656'
          structure='link'
          title={item.name}
          link={item.uri}
          breakpoint="1000"
        ></axg-element>
      ))}
    </axg-element>
  )
}