import React from 'react'

const AboutImage = () => {
  return (
    <div className="relative h-[500px] w-[300px]">
      <div className="absolute h-[500px] w-[300px] rounded-[100px] overflow-hidden z-2">
        <img
          src="/images/about-me.jpg"
          alt="About me image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="absolute h-[500px] w-[250px] bg-lime-600 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-1">
      </div>
    </div>
  )
}

export default AboutImage