import React, { useEffect, useState } from 'react'
import PortfolioItem from './PortfolioItem'
import imagen from '../assets/imgs/port.png'
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

  console.log(repos)

  return (
    <section className='section bg-custom-gray' id='portfolio'>
      <div className='container'>
        <h1 className='mb-5'><span className='text-danger'>My</span> Portfolio</h1>
        <div className='portfolio'>
          {/* <div className='filters'>
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
          </div> */}
          <div className='row portfolio-container'>
            { repos.map((repo, index) => {
              return (
                <PortfolioItem 
                  key={index}
                  image={repo.language == 'JavaScript' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' : imagen}
                  title={repo.name}
                  subtitle={repo.description}
                  categories={['web', 'new']}
                  alt={repo.name}
                  url={repo.html_url}
                />
              )
            }) }
          </div>
        </div>
      </div>
    </section>
  )
}
