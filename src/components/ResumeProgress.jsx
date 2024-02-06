import React from 'react'

export default function ResumeProgress(props) {
  const { title, items } = props
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='pull-left'>
          <h4 className='mt-2'>{ title }</h4>
          <span className='line'></span>
        </div>
      </div>
      <div className='card-body pb-2'>
        { items.map((item, index) => {
          return (
            <div key={index}>
              <h6>{ item.title }</h6>
              <div className='progress mb-3'>
                <div className='progress-bar bg-blue' role='progressbar' style={{width: `${item.percentage}%`}} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}
