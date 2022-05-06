import React from 'react'
import style from './style.module.css'

export default function Text({ onClick, size, align, children, tag='h1', color='var(--dark)', text='', customClass=[''], nomargin=0 }) {
  const element = React.createElement(
    tag,
    {
      className: `${style.default} ${customClass.map(cclass => style[cclass]).join(' ')} ${nomargin ? style.nomargin : ''}`,
      style: {color: color, textAlign: align, fontSize: size, cursor: 'pointer'},
      onClick: onClick
    },
    children||text)
  
  return element;
}