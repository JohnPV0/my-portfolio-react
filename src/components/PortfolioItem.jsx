import React from 'react'

export default function PortfolioItem(props) {
  const { imagen, title, subtitle, categories, alt } = props

  return (
    <div className={`col-md-6 col-lg-4 ${categories.join(' ')}`}>
      <div className='portfolio-item'>
      <img src={ imagen } className="img-fluid" alt={ alt } />
        <div className="content-holder">
            <a className="img-popup" href={ imagen }></a>
            <div className="text-holder">
                <h6 className="title">{ title }</h6>
                <p className="subtitle">{ subtitle }</p>
            </div>
        </div>
      </div>
    </div>
  )
}
