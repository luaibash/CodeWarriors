import React from 'react'
import BackgroundGif2 from "../assets/trees.mp4";
import Back from "../assets/Back.png";
import Exit from "../assets/Exit.png";
import Avatar from "../assets/avatar.png";
import ProgressBar from "../assets/progressset.png";
import questlines from "../assets/questlines.png";
import check from "../assets/Login.png"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Home = () => {
  return (
    //main div
    <div
      name="The main container for missions page"
      className="flex flex-row justify-center align-center items-start w-screen h-screen"
    >
      <video className="absolute h-full w-full" autoPlay loop muted>
        <source src={BackgroundGif2} type="video/mp4"></source>
      </video>

      {/* this section is for left side */}
      
      <div className="z-10 flex flex-col  justify-center items-center w-5/5 mt-5 ml-5 mr-2.5 mb-12 h-5/6 p-5 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
      <Link
                to="/description"
                className="w-5/6 h-5/6 flex flex-col items-center">
        <img className="z-10 flex flex-col justify-center items-center w-9/10 mb-3 h-5/6" src={questlines} alt="missions look"/>
        </Link>
        <Link
                to="/"
                className="w-5/6 h-5/6 flex flex-col items-center">
                <image
                className="z-20 w-2/6 h-5/6 bg-transparent hover:cursor-pointer"
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


        {/* Invisible Link */}
        



      </div>
      
      {/* this section is for right side */}
      <div className="z-10 flex flex-col justify-start items-center w-2/5 mt-5 h-5/6 bg-zinc-0 rounded-2xl">
        <div className="z-10 flex flex-col justify-start items-center w-4/5 mb-2 h-4/5 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
          <h1
            class="title-text"
            className="text-white text-5xl mt-5 font-VT323"
          >
            Level 7
          </h1>
          <div className="z-10 flex flex-col justify-start items-center w-4/5 mt-2 mb-2 h-4/6 bg-gray-600 border-2 border-slate-800 rounded-2xl">
            <img src={Avatar} alt="Avatar Boy"/> 
          </div>
        </div>
        <div className="z-10 flex flex-row justify-start items-center w-4/5 h-2/6 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
          <img src = {ProgressBar}></img>
        </div>
        <div className="z-10 flex flex-row justify-center items-center w-4/5 h-5/6">
        
        </div>
        
      </div>
    </div>
  )
}


export default Home
