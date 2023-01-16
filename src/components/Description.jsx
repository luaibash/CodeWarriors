import React from 'react'
import BackgroundGif2 from "../assets/trees.mp4";
import Back from "../assets/Back.png";
import Exit from "../assets/Exit.png";
import Avatar from "../assets/asmodeus.png";
import ProgressBar from "../assets/progressset.png";
import missions from "../assets/description.png";
import check from "../assets/Login.png"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Description = () => {
  return (
    <div
      name="The main container for missions page"
      className="flex flex-row justify-center align-center items-start w-screen h-screen"
    >
      <video className="absolute h-full w-full" autoPlay loop muted>
        <source src={BackgroundGif2} type="video/mp4"></source>
      </video>

      {/* this section is for left side */}
      <Link
                to="/missions"
                className="w-5/6 h-5/6 flex flex-col items-center">
      <div className="z-10 flex flex-row grow-3 justify-start items-start w-5/5 mt-5 ml-5 mr-2.5 mb-12 h-5/6 p-5 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
        <img className="z-10 flex flex-col justify-start items-center w-full ml-20 mb-3 h-full pr-40 pl--40" src={missions} alt="missions look"/> 
      </div> </Link>
      
      {/* this section is for right side */}
      <div className="z-10 flex flex-col justify-start items-center w-2/5 mt-5 h-5/6 bg-zinc-0 rounded-2xl">
        
        <div className="z-10 flex flex-row justify-start items-center w-4/5 h-1/5 bg-white border-2 border-slate-900 rounded-2xl">
        <h1
          class="title-text"
          className="text-black text-center text-5xl  font-VT323"
        >A wild Asmodeus has appeared...</h1>
        </div>
        <div className="z-10 flex flex-col justify-start items-center w-4/5 mt-4 h-3/5 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
            <img className = "py-12 px-4 " src={Avatar} alt="Avatar Boy"/> 
        </div>
        <div className="flex flex-row justify-center w-3/5 h-4/5">
        <Link
                to="/home"
                className="w-5/6 h-5/6 flex flex-col items-center">
                <image
                //className="z-20 w-5/6 h-5/6 px-10 -mb-2 py-1 bg-transparent hover:cursor-pointer"'
                className="z-20 w-2/5 h-4/5 px-10  py-1 bg-transparent hover:cursor-pointer"
                style={{
                  backgroundImage: `url(${Back})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundSize: "100%",
                  imageRendering: "pixelated",
                }}
              ></image>
        </Link>
        <Link
                to="/"
                className="w-5/6 h-5/6 flex flex-col items-center">
                <image
                //className="z-20 w-5/6 h-5/6 px-10 -mb-2 py-1 bg-transparent hover:cursor-pointer"'
                className="z-20 w-2/5 h-4/5 px-10  py-1 bg-transparent hover:cursor-pointer"
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
      </div>
    </div>
  )
}

export default Description