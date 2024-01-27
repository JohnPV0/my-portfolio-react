import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'

export default function App() {
  return (
    <>
      <a href="" className='btn btn-primary btn-component' data-spy='affix' data-offset-top='600'><i className='ti-shift-left-alt'></i>Componentes</a> 
      <Header />
      <Menu />
    </>
  )
}
