import React from 'react'
import BackgroundGif2 from "../assets/trees.mp4";
import Back from "../assets/Back.png";
import Exit from "../assets/Exit.png";
import End from "../assets/popup.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Description = () => {
  return (
    <div
      name="The main container for missions page"
      className="flex flex-col justify-center align-center items-center w-screen h-screen"
    >
      <video className="absolute h-full w-full" autoPlay loop muted>
        <source src={BackgroundGif2} type="video/mp4"></source>
      </video>

      {/* this section is for left side */}
      <div className="z-10 flex flex-row grow-3 justify-center items-center w-3/5 mt-5 ml-5 mr-2.5 h-5/6 p-5 bg-zinc-600 border-2 border-slate-800 rounded-2xl">
        <img className="z-10 flex flex-col justify-center items-center w-full ml-20 mb-3 h-full pr-40 pl--40" src={End} alt="missions look"/> 
      </div>

      <Link
                to="/"
                target="_blank"

                className="w-4/5 h-2/5 flex flex-col items-center">

                <image
                className="z-20 w-1/5 h-full bg-transparent hover:cursor-pointer"
                style={{
                  backgroundImage: `url(${Exit})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundSize: "100%",
                  imageRendering: "pixelated",
                }}
              ></image>
        </Link>
      
      
    </div>
  )
}

export default Description