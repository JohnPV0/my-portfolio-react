import React from 'react'

export default function Header(props) {

  const { socialNetworks } = props

  const downloadPdf = () => {
    // Cambia 'ruta/al/archivo.pdf' por la ruta relativa o absoluta al archivo PDF en tu servidor
    var rutaPDF = 'public/pdfs/MyCV.pdf';
    
    // Abre el archivo PDF en una nueva pestaña
    window.open(rutaPDF, '_blank');
  }

  return (
    <header id='home' className='header'>
      <div className='container'>
        <ul className='social-icons pt-3'>
          <li className='social-item'><a className="social-link text-light" href={ socialNetworks.facebook }><i className='ti-facebook' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href={ socialNetworks.twitter }><i className='ti-twitter' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href={ socialNetworks.linkedin }><i className='ti-linkedin' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href={ socialNetworks.instagram }><i className='ti-instagram' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className="social-link text-light" href={ socialNetworks.github }><i className='ti-github' aria-hidden="true"></i></a></li>
        </ul>
        <div className='header-content'>
          <h4 className='header-subtitle'>Hello, I am</h4>
          <h1 className='header-title'>John Pérez</h1>
          <h1 className='header-title'>Valencia</h1>
          <h6 className='header-mono'>Computer Systems Engineering Student </h6>
          <button className='btn btn-primary btn-rounded' onClick={downloadPdf}><i className='ti-printer pr-2'></i>Download My CV</button>
        </div>
      </div>
    </header>
  )
}
