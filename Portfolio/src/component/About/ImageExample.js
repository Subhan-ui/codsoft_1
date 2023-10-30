import React from 'react'
import Tilt from 'react-parallax-tilt'
import '../../App.css'

import SubhanImage from '../../Assets/Subhan.jpeg'

const ImageExample = () => {
  return (
    <>
    <Tilt >
        <img src={SubhanImage} className="img-about" alt="MyPicture" />
      
    </Tilt>
    </>
  )
}

export default ImageExample
