import React from 'react'
import { Blocks } from 'react-loader-spinner'


export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Blocks
        height="80"
        width="80"
        color="#008ec3"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
        />
    </div>
  )
}
