import React, { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem'
import imagen from '../assets/imgs/web-1.jpg'
import axios from 'axios'

export default function Portfolio() {

  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/user/repos', {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`
          }
        })
        setRepos(response.data)
      } catch (error) {
        console.log('Error fetching repos: ', error)
      }
    }
    fetchRepos()
  }, [])

  return (
    <section className='section bg-custom-gray' id='portfolio'>
      <div className='container'>
        <h1 className='mb-5'><span className='text-danger'>My</span> Portfolio</h1>
        <div className='portfolio'>
          <div className='filters'>
            <a href='#' data-filter='.new' className='active'>
              New
            </a>
            <a href='#' data-filter='.mobile'>
              Mobile
            </a>
            <a href='#' data-filter='.web'>
              Web
            </a>
            <a href='#' data-filter='.backend'>
              Backend
            </a>
          </div>
          <div className='portfolio-container'>
            <PortfolioItem imagen={imagen} title='Web 1' subtitle='Este es mi proyecto' categories={['new', 'web']} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
