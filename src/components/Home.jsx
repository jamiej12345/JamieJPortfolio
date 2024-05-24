import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col w-full justify-center h-fit items-center mt-20'>
      <div className='sm:w-[33rem] md:w-7/12 w-full mt-8 flex flex-col w-full justify-center items-center'>
        <div className='py-4 px-4 w-9/12 h-fit'>
          <h1 className='text-3xl text-amber-50'>Jamie Joahill</h1>
          <p>Frontend Developer</p>
          <div className='divider divider-accent w-7/12'></div>
        </div>

        <div className='py-4 px-4 w-9/12 h-fit text-amber-50'>
          <p className='py-3'>
            As a Frontend developer with two years of experience in the fintech
            industry, I specialize in building dynamic, responsive,
            user-friendly web applications.
          </p>
          <p className='py-3'>
            My expertise encompasses all aspects of Frontend development,
            specifically React, React Hooks, JavaScript, TailwindCSS, and
            DaisyUI.
          </p>

          <p className='py-3'>
            I am accountable and responsible. I quickly and effectively learn
            new technologies, ensuring I become a valuable team member from day
            one.
          </p>
          <p className='py-3'>
            Currently, I'm working on a proof of concept application using the
            MERN stack (MongoDB, Express, React, Node.js), bringing innovative
            solutions to life through my coding skills and passion for
            technology.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
