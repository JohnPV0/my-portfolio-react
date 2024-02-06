import React, { useEffect, useState } from 'react'
import ResumeColumn from './ResumeColumn'
import ResumeProgress from './ResumeProgress'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/firebase'

export default function Resume() {
  const [resumeInfo, setResumeInfo] = useState({})

  useEffect(() => {
    const getResumeInfo = async () => {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, 'resume'))
      setResumeInfo(querySnapshot.docs[0].data())
    }
    getResumeInfo()
  }, [])

  let education = resumeInfo.education || []
  //Order the array by startYear in descending order
  if (education.length > 0) education = education.sort((a, b) => b.startYear - a.startYear)

  let experience = resumeInfo.experience || []
  //Order the array by startYear in descending order
  if (experience.length > 0) experience = experience.sort((a, b) => b.startYear - a.startYear)

  return (
    <section className='section' id='resume'>
      <div className='container'>
        <h2 className='mb-5'><span className='text-danger'>My</span> Resume</h2>
        <div className='row'>
          <ResumeColumn title='Education' items={education} />
          <ResumeColumn title='Experience' items={experience} />
          <div className='col-lg-4'>
            <ResumeProgress title='Skills' items={resumeInfo.skills || []}/>
            <ResumeProgress title='Languages' items={[
              {
                title: 'Spanish',
                percentage: 100
              },
              {
                title: 'English',
                percentage: 50
              }
            ]}/>
          </div>
        </div>
      </div>
    </section>
  )
}
