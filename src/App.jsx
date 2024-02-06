import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import { app } from './firebase/firebase.js'
import { getFirestore,collection, getDocs, query } from 'firebase/firestore'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Loading from './components/Loading.jsx'

export default function App() {

  const [socialNetworks, setSocialNetworks] = useState({})
  const [personalInfo, setPersonalInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const getSocialNetworks = async () => {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, 'social-networks'))
      setSocialNetworks(querySnapshot.docs[0].data())
    }
    getSocialNetworks()

    const getPersonalInfo = async () => {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, 'personal-info'))
      setPersonalInfo(querySnapshot.docs[0].data())
      setIsLoading(false)
    }
    getPersonalInfo()
  }, [])

  console.log(isLoading)

  return (
    <>
      {isLoading ? <Loading /> : (
        <>
          <a href="" className='btn btn-primary btn-component' data-spy='affix' data-offset-top='600'><i className='ti-shift-left-alt'></i>Componentes</a> 
          <Header socialNetworks={socialNetworks}/>
          <Menu />
          <div className='container-fluid'>
            <About socialNetworks={socialNetworks} personalInfo={personalInfo}/>
          </div>
          <Resume />
          <Portfolio />
          <Contact socialNetworks={socialNetworks}/> 
          <Footer />
        </>
      )}
    </>
  )
}
