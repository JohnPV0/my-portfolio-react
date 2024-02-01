import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import Resume from './components/Resume'
import { app } from './firebase/firebase.js'
import { getFirestore,collection, getDocs } from 'firebase/firestore'

export default function App() {

  const [socialNetworks, setSocialNetworks] = useState({})

  useEffect(() => {
    const getSocialNetworks = async () => {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, 'social-networks'))
      setSocialNetworks(querySnapshot.docs[0].data())
    }
    getSocialNetworks()
  }, [])
  
  return (
    <>
      <a href="" className='btn btn-primary btn-component' data-spy='affix' data-offset-top='600'><i className='ti-shift-left-alt'></i>Componentes</a> 
      <Header socialNetworks={socialNetworks}/>
      <Menu />
      <div className='container-fluid'>
        <About socialNetworks={socialNetworks}/>
      </div>
      <Resume />
    </>
  )
}
