import React from 'react'
import ResumeColumn from './ResumeColumn'
import ResumeSkills from './ResumeSkills'

export default function Resume() {
  return (
    <section className='section' id='resume'>
      <div className='container'>
        <h2 className='mb-5'><span className='text-danger'>My</span> Resume</h2>
        <div className='row'>
          <ResumeColumn title='Education' items={[
            {
              startYear: '2019',
              endYear: '2023',
              title: 'Computer Systems Engineering',
              subtitle: 'Toluca Technological Institute'
            },
            {
              startYear: '2016',
              endYear: '2019',
              title: 'High School',
              subtitle: 'Toluca Technological Institute'
            }
          ]} />
          <ResumeColumn title='Experience' items={[
            {
              startYear: '2021',
              endYear: '2021',
              title: 'Intern',
              subtitle: 'Toluca Technological Institute'
            },
            {
              startYear: '2021',
              endYear: '2021',
              title: 'Intern',
              subtitle: 'Toluca Technological Institute'
            }
          ]} />
          <div className='col-lg-4'>
            <ResumeSkills />  
          </div>
        </div>
      </div>
    </section>
  )
}
