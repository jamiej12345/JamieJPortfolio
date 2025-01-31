import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <div className='flex flex-col w-full justify-center h-fit items-center mt-20'>
      <div className='sm:w-[35rem] md:w-7/12 w-full mt-8 flex flex-col w-full justify-center items-center'>
        <div className='py-4 w-9/12 h-fit'>
          <h1 className='md:text-3xl text-2xl text-amber-50'>
            Projects & Experience
          </h1>
          <div className='divider divider-accent w-7/12'></div>
        </div>

        <div className='py-4 px-4 w-10/12 h-fit'>
          <div className='collapse-title text-1xl font-bold text-amber-50 -z-10'>
            InvestCloud - Frontend Developer - March 2022 / March 2024
          </div>
          <div className='py-3 px-4 -z-10'>
            <p>
              As a frontend developer, I have created client and advisor web
              portals for some of the largest financial corporations in the
              world. My work has included projects for prominent clients such as
              Rathbones, RBC (Royal Bank of Canada), HSBC, Vermeer, EFG
              International, and Lloyds of London.
            </p>
          </div>

          <p className='py-3'>
            <ul class='marker:text-accent list-disc pl-5 space-y-3 text-amber-50'>
              <li>
                Skilled in developing and maintaining Frontend components for
                web-based applications, mobile apps and websites.
              </li>
              <li>
                Experienced in prototyping and proof-of-concept(POC)
                development, with deep expertise in cross-browser optimisation,
                performance optimisation, and Web Content Accessibility
                Guidelines (WCAG) 2.0 compliance.
              </li>
              <li>
                Proficient in project estimation, conducting interviews,
                knowledge transfer, and training and developing new hires.
              </li>
              <li>
                Collaborated with a team of developers to successfully complete
                120 screens and components within a two-week deadline, achieving
                what had never been done before at InvestCloud.
              </li>
              <li>
                Resolved multiple critical bugs and implemented enhancements in
                web applications, significantly boosting functionality and
                performance.
              </li>
            </ul>
          </p>

          <div className='collapse-title text-1xl font-bold text-amber-50 -z-10'>
            learn search discover - MERN - May 2024
          </div>
          <div className='py-3 px-4 -z-10'>
            <p>
              In my quest for finding a web application offering high-quality
              resources and coming up empty-handed, I felt inspired to fill this
              gap myself. As a frontend developer, I utilised my skills to
              create a comprehensive platform that provides learning material to
              its users.
            </p>
            <p className='py-3'>
              <ul class='marker:text-accent list-disc pl-5 space-y-3 text-amber-50'>
                <li>MongoDb</li>
                <li>Mongoose</li>
                <li>Express.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>bcrypt.js</li>
                <li>AdminJS</li>
                <li>TailwindCSS</li>
                <li>DaisyUI</li>
              </ul>
            </p>
            <Link to='/Project'>
              <h4 className='text-warning cursor-pointer mt-4 w-fit hover:text-accent'>
                Read more...
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
