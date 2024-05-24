import React from 'react'

const NotFound = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='flex flex-col w-screen justify-center h-3/6 flex-col w-11/12 items-center'>
        <h3 className='text-9xl mb-8 antialiased font-bold text-accent'>
          Oops!
        </h3>
        <h3 className='text-4xl mb-8 antialiased text-accent'>
          Cant seem to find the page you&apos;re looking for.
        </h3>
        <h3 className='text-2xl mb-8 antialiased text-accent'>
          404 <span className='primary-text-color'>|</span> This page could not
          be found.
        </h3>
      </div>
    </div>
  )
}

export default NotFound
