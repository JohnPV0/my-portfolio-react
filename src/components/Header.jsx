import React from 'react'

export default function Header() {
  return (
    <header id='home' className='header'>
      <div className='container'>
        <ul className='social-icons pt-3'>
          <li className='social-item'><a className="social-link text-light" href='#'><i className='ti-facebook' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href='#'><i className='ti-twitter' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href='#'><i className='ti-linkedin' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href='#'><i className='ti-instagram' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href='https://github.com/JohnPV0'><i className='ti-github' aria-hidden="true"></i></a></li>
        </ul>
        <div className='header-content'>
          <h4 className='header-subtitle'>Hello, I am</h4>
          <h1 className='header-title'>John Pérez</h1>
          <h1 className='header-title'>Valencia</h1>
          <h6 className='header-mono'>Computer Systems Engineering Student </h6>
          <button className='btn btn-primary btn-rounded'><i className='ti-printer pr-2'></i>Download My CV</button>
        </div>
      </div>
    </header>
  )
}
