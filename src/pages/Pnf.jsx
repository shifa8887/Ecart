import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Pnf = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px',height:'100vh'}} className='flex justify-center items-center flex-col'>
    <h1 className='font-bold text-8xl mb-2'>404</h1>
      <img width={'300px'} height={'300px'} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h1 className='font-bold text-4xl mb-2'>Looks like you'r Lost.</h1>
      <p className='mb-2'>The page your looking is not available!!!</p>
      <Link to={'/'} className='bg-green-600 p-2 text-white '>Home</Link>
    </div>
    <button></button>
    </>
  )
}

export default Pnf