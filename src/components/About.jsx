import React from 'react'
import AboutExpertiseItem from './AboutExpertiseItem'

export default function About(props) {
  const { socialNetworks } = props
  return (
    <div id='about' className='row about-section'>
      <div className='col-lg-4 about-card'>
        <h3 className='font-weight-light'>Who am I ?</h3>
        <span className='line mb-5'></span>
        <h5 className='mb-3'>Computer Systems Engineering Student at Toluca Technological Institute</h5>
        <p className='mt-20'></p>
      </div>
      <div className='col-lg-4 about-card'>
        <h3 className='font-weight-light'>Personal Info</h3>
        <span className='line mb-5'></span>
        <ul className='mt40 info list-unstyled'>
          <li><span>Birthdate</span> : 06/04/2001</li>
          <li><span>Email</span> : perezvale1500@gmail.com</li>
          <li><span>Phone</span> : +52 729 106 8666</li>
          <li><span>Location</span> : Toluca, Mex. Mex.</li>
        </ul>
        <ul className='social-icons pt-3'>
          <li className='social-item'><a className='social-link' href={ socialNetworks.facebook }><i className='ti-facebook' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className='social-link' href={ socialNetworks.twitter }><i className='ti-twitter' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className='social-link' href={ socialNetworks.linkedin }><i className='ti-linkedin' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className='social-link' href={ socialNetworks.instagram }><i className='ti-instagram' aria-hidden="true"></i></a></li>
          <li className='social-item'><a className='social-link' href={ socialNetworks.github }><i className='ti-github' aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div className='col-lg-4 about-card'>
        <h3 className='font-weight-light'>My Expertise</h3>
        <span className='line mb-5'></span>
        <AboutExpertiseItem tiIconName='ti-widget' title='Title' description='Description' />
        <AboutExpertiseItem tiIconName='ti-paint-bucket' title='Title' description='Description' />
        <AboutExpertiseItem tiIconName='ti-stats-up' title='Title' description='Description' />
      </div>
    </div>
  )
}
