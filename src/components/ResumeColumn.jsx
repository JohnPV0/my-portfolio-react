import React from 'react'

export default function ResumeColumn(props) {
  const { title, items } = props
  return (
    <div className='col-md-6 col-lg-4'>
      <div className='card'>
        <div className='card-header'>
          <div className='mt-2'>
            <h4>{ title }</h4>
            <span className='line'></span>
          </div>
        </div>
        <div className='card-body'>
          { items.map((item, index) => {
            return (
              <div key={index}>
                <h6 className='title text-danger'>{ item.startYear } - { item.endYear }</h6>
                <p>{ item.title }</p>
                <p className='subtitle' >{ item.subtitle }</p>
                { index < items.length - 1 && <hr /> }
              </div>
            )
            
          }) }
        </div>
      </div>
    </div>
  )
}
