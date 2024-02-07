import React from 'react'

export default function PortfolioItem(props) {
  const { image, title, subtitle, categories, alt, url } = props

  return (
    <div className={`col-md-6 col-lg-4 ${categories.join(' ')}`}>
        <a href={url} target='_blank' rel='noreferrer'>
          <div className='portfolio-item'>
          <img src={ image } className="img-fluid" alt={ alt }/>
            <div className="content-holder">
                {/* <a className="img-popup" href={ image }></a> */}
                <div className="text-holder">
                    <h6 className="title">{ title }</h6>
                    <p className="subtitle">{ subtitle }</p>
                </div>
            </div>
          </div>  
        </a>
    </div>
  )
}
