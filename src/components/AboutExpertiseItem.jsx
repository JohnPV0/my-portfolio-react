import React from 'react'

export default function AboutExpertiseItem(props) {
  const { tiIconName, title, description } = props
  return (
    <div className='row'>
      <div className='col-1 text-danger pt-1'><i className={`${tiIconName} icon-lg`}></i></div>
      <div className='col-10 ml-auto mr-3'>
        <h6>{ title }</h6>
        <p className='subtitle'>{ description }</p>
        <hr />
      </div>
    </div>
  )
}
