import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import SubHero from './SubHero'

// Hero main component
const HeroMain = () => {
  return (
    <section id='hero' className='font-sans bg-white dark:bg-gray-800 pt-40'>
      <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative pb-20 px-4'>
        <HeroPic />
        <HeroText />
      </div>
      <SubHero />
    </section>
  )
}

export default HeroMain