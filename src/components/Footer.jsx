import React from 'react'

export default function Footer() {
  return (
    <footer className='footer py-3'>
      <div className='container'>
        <p className='samll mb-0 text-light'>
          &copy; { new Date().getFullYear() } Design Created With <i className='ti-heart text-blue'></i> By <a href='http://devcrud.com' target='_blank' rel='noreferrer'><span className='text-blue' title='Bootstrap 4 Themes and Dashboards'>DevCRUD</span>  </a>
        </p>
      </div>
    </footer>
  )
}
