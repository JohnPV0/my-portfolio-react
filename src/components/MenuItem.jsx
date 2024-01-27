import React from 'react'

export default function MenuItem(props) {
  const { href, text } = props
  return (
    <li className='nav-item'>
      <a href={href} className='nav-link'>{ text }</a>
    </li>
  )
}
