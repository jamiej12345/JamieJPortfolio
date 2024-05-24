import React from 'react'
// import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className='flex flex-col w-full justify-center h-fit items-center mt-20'>
      <div className='flex flex-col w-9/12 h-fit'>
        <h1 className='text-3xl text-amber-50 mt-10 text-accent text-amber-50 w-full'>
          learn search discover
        </h1>
        <h4 className='text-warning cursor-pointer mt-4 w-fit hover:text-accent'>
          <div className='flex  w-full'>
            <div className='carousel carousel-center p-4 space-x-4 bg-neutral rounded-box h-[98%rem] w-[100%] mb-3 cursor-default'>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537245/Jamie%20Joahill%202024%20portfolio%20images/ilkkblo51p5tb36p2pro.png'
                  className='rounded-box h-[98%] w-[32rem]'
                  alt='1'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537243/Jamie%20Joahill%202024%20portfolio%20images/hwz9cdaakryhkbnyslbc.png'
                  className='rounded-box h-[98%] w-[32rem]'
                  alt='2'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537244/Jamie%20Joahill%202024%20portfolio%20images/rvy6ujvmqdkilm2ppnyn.png'
                  className='rounded-box h-[18rem] w-[32rem]'
                  alt='3'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537245/Jamie%20Joahill%202024%20portfolio%20images/mv3mfmi9gp6oxk3anmkl.png'
                  className='rounded-box h-[18rem] w-[32rem]'
                  alt='4'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537244/Jamie%20Joahill%202024%20portfolio%20images/awacpt58b8jm2acnlf2f.png'
                  className='rounded-box h-[18rem] w-[32rem]'
                  alt='5'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537245/Jamie%20Joahill%202024%20portfolio%20images/zzcujuwcjzx05iv44ss7.png'
                  className='rounded-box h-[18rem] w-[32rem]'
                  alt='5'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src='https://res.cloudinary.com/dmpvulj3q/image/upload/v1716537244/Jamie%20Joahill%202024%20portfolio%20images/uu3mssb11qgw4opc5cgn.png'
                  className='rounded-box h-[18rem] w-[32rem]'
                  alt='5'
                />
              </div>
            </div>
          </div>
        </h4>
        {/* <Link to='' className='pt-3 text-accent hover:text-warning w-fit'>
          View application
        </Link> */}
        <p className='py-3 w-full text-amber-50'>
          In my quest for finding a web application offering high-quality
          resources and coming up empty-handed, I felt inspired to fill this gap
          myself. As a frontend developer, I utilised my skills to create a
          comprehensive platform that provides learning material to its users.
          The objective was not only to facilitate learning but also to aid in
          the exploration of new hobbies and passions. My commitment to trust
          and transparency is reflected in this web application. This experience
          has improved upon my frontend development skills and showcased my
          initiative and dedication to providing valuable, accessible content.
        </p>
        <h3 className='text-2xl text-accent'>Tech</h3>
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
        <h3 className='text-2xl text-accent mt-10'>Challenges </h3>
        <p className='py-3 w-full text-amber-50'>
          I faced challenges using TailwindCSS along with DaisyUI. The concept
          of not having to add classes into a .css file was daunting at first.
          However, as I got used to the flow of how these tools worked together,
          I found it to be an easier and more efficient way of improving the
          design and user interface of my application.
        </p>
        <p className='py-3 w-full text-amber-50'>
          Initially, transitioning from traditional CSS to utility-first
          frameworks like TailwindCSS felt overwhelming. The idea of embedding
          styles directly into JSX elements seemed counterintuitive. Despite
          this, I embraced the learning curve and gradually became comfortable
          with the methodology. TailwindCSS's utility classes allowed for rapid
          prototyping and fine-tuned control over styling, which significantly
          streamlined the development process.
        </p>
        <p className='py-3 w-full text-amber-50'>
          Integrating DaisyUI, a component library built on top of TailwindCSS,
          further enhanced my workflow. DaisyUI's pre-designed components
          enabled me to quickly implement consistent and visually appealing
          elements across my application. This combination not only improved the
          efficiency of my design process but also resulted in a cohesive and
          polished user interface.
        </p>
        <p className='py-3 w-full text-amber-50'>
          Ultimately, overcoming these initial challenges with TailwindCSS and
          DaisyUI has made me a more versatile developer. I now appreciate the
          power and flexibility these tools offer, and I am confident in my
          ability to leverage them to create dynamic and responsive designs.
        </p>
        <h3 className='text-2xl text-accent mt-10'>Solutions </h3>
        <p className='py-3 w-full text-amber-50'>
          <p className='mb-3'>
            Utilizing AdminJS for Content Management and Moderation
          </p>
          <p className='mb-3'>
            AdminJS serves as a robust admin portal within my application,
            providing comprehensive tools for content management and moderation.
            Its main features include:
          </p>{' '}
          <div className='py-3 px-3'>
            <p className='mb-3'>
              <span className='text-accent font-bold'>Status Management:</span>{' '}
              The primary function of the admin portal is to amend the status of
              each site, ensuring it appears correctly within the application.
              This allows for seamless control over which content is visible to
              users, maintaining a curated and high-quality user experience.
            </p>{' '}
            <p className='mb-3'>
              <span className='text-accent font-bold'>
                Content Editing and Updates:
              </span>{' '}
              AdminJS enables administrators to update and edit descriptions of
              sites and other content within the application. This feature
              ensures that all information remains accurate, relevant, and
              up-to-date, enhancing the overall utility and appeal of the
              application.
            </p>{' '}
            <p className='mb-3'>
              <span className='text-accent font-bold'>Review Moderation:</span>{' '}
              A crucial aspect of maintaining a positive user environment is the
              ability to remove malicious comments. AdminJS provides tools for
              quickly identifying and deleting inappropriate or harmful content,
              safeguarding the community and ensuring a respectful and engaging
              user experience.
            </p>
          </div>
          <p className='mb-3'>
            By integrating AdminJS, I have streamlined the process of content
            management and moderation. The intuitive interface and powerful
            features of AdminJS allow for efficient oversight and control,
            making it easier to maintain the quality and integrity of the
            content within the application.
          </p>
        </p>
        <div className='mb-5'>
          <h3 className='text-2xl text-accent mt-10'>Outcome </h3>
          <p className='py-3 w-full text-amber-50'>
            I believe this application serves as a viable proof of concept that
            people can easily integrate into their lives. The target market for
            this application includes individuals who are just starting out in a
            specific field and are unsure of which path to take or where to
            begin.
          </p>
        </div>

        {/* <h3 className='text-2xl text-accent mt-10'>Next Steps</h3> */}
        {/* <p className='py-4 w-full text-amber-50 px-3 pb-5'>
          This is a proof of concept at the moment and but will continue to
          improve and developer this application.
        </p> */}
      </div>
    </div>
  )
}

export default Project
