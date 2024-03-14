import React, { useEffect } from 'react'

const About = () => {
  useEffect(async () => {
    console.log('ABOUT PAGE')
    return () => {
      console.log('ABOUT PAGE unmount')
      
    }
  }, [])
  return (
    <div>About</div>
  )
}

export default About