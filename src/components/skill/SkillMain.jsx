import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import SubSkill from './SubSkill'

const SkillMain = () => {
  return (
    <section id='skills' className='pt-20 mx-auto bg-white dark:bg-gray-800'>
      <div className='max-w-[1200px] min-h-120 mx-auto px-4 relative overflow-hidden'>
        <SkillText />
        <AllSkills />
      </div>
      <SubSkill />
    </section>
  )
}

export default SkillMain