import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-gray-800 text-white p-4 flex items-center justify-center'>
      <div>EvalNest</div>
      <div className='mx-4'>|</div>
      <div> {currentYear} ©</div>
    </div>
  )
}

export default Footer