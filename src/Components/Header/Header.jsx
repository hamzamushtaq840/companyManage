import React from 'react'
import stats from './../../Assets/illustration-intro.svg'
import background from './../../Assets/bg-simplify-section-desktop.svg'


function Header() {
  return (
    <section styles={{ backgroundImage:`url(${background})` }} >
        <div className=' flex p-4 md:p-16 items-center text-center mx-auto flex-col-reverse md:flex-row '>
            <div className='flex flex-col items-center md:items-start space-y-12 md:w-1/2 mb:10 ' >
                <h1 className='max-w-md text-4xl font-bold text-center md:text5xl lg:text-6xl md:text-left '>Bring everyone together to build better products.</h1>
                <p className='text-whiteLight text-lg w-3/4 md:max-w-sm text-center md:text-left'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <div class="flex justify-center md:justify-start">
                  <a href="#" class="p-3 px-6 text-s pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
                </div>
            </div>
            <div className='bg-picture flex justify-end md:w-1/2 m-b-4 '>
                <img  src={stats}/>
            </div>
        </div>
    </section>
)
}

export default Header