import React from 'react'
import BackgroundGif from "../assets/trees.mp4"

const Listings = () => {
  return (
    <div
      name="The main container for login page"
      className="flex flex-col justify-end items-center w-screen h-screen"
    >
      <video className="absolute h-full w-full" autoPlay loop muted>
        <source src={BackgroundGif} type="video/mp4"></source>
      </video>



  </div>
  )
}

export default Listings