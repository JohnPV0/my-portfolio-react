import React, { useEffect, useState } from 'react'
import { app } from './firebase/firebase.js'
import { getFirestore,collection, getDocs } from 'firebase/firestore'
import MainApp from './components/MainApp.jsx'


export default function App() {

  const [socialNetworks, setSocialNetworks] = useState({})
  const [personalInfo, setPersonalInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

  return (
    <MainApp socialNetworks={socialNetworks} personalInfo={personalInfo} />
  )
}
