import React from 'react'
import MenuItem from './MenuItem'
import avatar from '../assets/imgs/avatar.jpg'

export default function Menu() {
  const [menu, setMenu] = React.useState([
    { href: '#home', text: 'Home', isActive: true},
    { href: '#about', text: 'About', isActive: false}  ,
    { href: '#resume', text: 'Resume', isActive: false},
    { href: '#', text: 'Portfolio', isActive: false},
    { href: '#', text: 'Blog', isActive: false},
    { href: '#', text: 'Contact', isActive: false},
  ])
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-white' data-spy='affix' data-offset-top='510'>
      <div className='container'>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse mt-sm-20 navbar-collapse" id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <MenuItem href='#home' text='Home' />
            <MenuItem href='#about' text='About' />
            <MenuItem href='#resume' text='Resume' />
          </ul>
          <ul className='navbar-nav brand'>
            <img src={ avatar } alt='' className='brand-img' />
            <li className='brand-txt'>
              <h5 className='brand-title'>John Pérez Valencia</h5>
              <div className='brand-subtitle'>Computer Systems Engineering Student</div>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <MenuItem href='#' text='Portfolio' />
            <MenuItem href='#' text='Blog' />
            <MenuItem href='#' text='Contact' />
          </ul>
        </div>
      </div>
    </nav>
  )
}
