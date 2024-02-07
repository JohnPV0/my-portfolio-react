import React from 'react'
import Header from './Header'
import Menu from './Menu'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

export default function MainApp(props) {
  const { socialNetworks, personalInfo } = props

  return (
    <>
      <a href="" className='btn btn-primary btn-component' data-spy='affix' data-offset-top='600'><i className='ti-shift-left-alt'></i>Componentes</a> 
      <Header socialNetworks={socialNetworks}/>
      <Menu />
      <div className='container-fluid'>
        <About socialNetworks={socialNetworks} personalInfo={personalInfo}/>
      </div>
      <Resume />
      <Portfolio />
      <Contact socialNetworks={socialNetworks} phone={personalInfo.phone} email={personalInfo.email} /> 
      <Footer />
    </>
  )
}
