import React from 'react'

export default function Contact(props) {
  const { socialNetworks, email, phone } = props
  return (
    <div className='section contact' id='contact'>
      <div className='map' id='map'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='contact-form-card'>
              <h4 className='contact-title'>Send a message</h4>
              <form action=''>
                <div className='form-group'>
                  <input className='form-control' type='text' placeholder='Name *' required />
                </div>
                <div className='form-group'>
                  <input className='form-control' type='email' placeholder='Email *' required />
                </div>
                <div className='form-group'>
                  <textarea className='form-control' placeholder='Message *' rows='7' required></textarea>
                </div>
                <div className='form-group'>
                  <button type='submit' className='form-control btn btn-primary'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='contact-info-card'>
              <h4 className='contact-title'>Contact Information</h4>
              <div className='row mb-2'>
                <div className='col-1 pt-1 mr-1'>
                  <i className='ti-mobile icon-md'></i>
                </div>
                <div className='col-10'>
                  <h6 className='d-inline'>Phone : <br /> <span className='text-muted'> { phone } </span> </h6>
                </div>
              </div>
              <div className='row mb-2'>
                <div className='col-1 pt-1 mr-1'>
                  <i className='ti-envelope icon-md'></i>
                </div>
                <div className='col-10'>
                  <h6 className='d-inline'>Email : <br /> <span className='text-muted'> { email } </span> </h6>
                </div>
              </div>
              <ul className='social-icons pt-3'>
                <li className='social-item'><a className="social-link text-dark" target='_blank' rel='noreferrer' href={ socialNetworks.facebook }><i className='ti-facebook' aria-hidden="true"></i></a></li>
                <li className='social-item'><a className="social-link text-dark" target='_blank' rel='noreferrer' href={ socialNetworks.twitter }><i className='ti-twitter' aria-hidden="true"></i></a></li>
                <li className='social-item'><a className="social-link text-dark" target='_blank' rel='noreferrer' href={ socialNetworks.linkedin }><i className='ti-linkedin' aria-hidden="true"></i></a></li>
                <li className='social-item'><a className="social-link text-dark" target='_blank' rel='noreferrer' href={ socialNetworks.instagram }><i className='ti-instagram' aria-hidden="true"></i></a></li>
                <li className='social-item'><a className="social-link text-dark" target='_blank' rel='noreferrer' href={ socialNetworks.github }><i className='ti-github' aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
