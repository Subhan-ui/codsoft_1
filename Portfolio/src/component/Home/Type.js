import React from 'react'
import Typewriter from 'typewriter-effect';


const Type = () => {
  return (
    <Typewriter
    options={{
        strings: [
            'Software Engineer  (not yet but soon INSHAALLAH)',
            "React Developer",
            "Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
    }}
    />
      
    
  )
}



// <Typewriter
//   options={{
//     strings: ['Hello', 'World'],
//     autoStart: true,
//     loop: true,
//   }}
// />

export default Type
