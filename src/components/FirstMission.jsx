import React from 'react'
import BackgroundGif2 from "../assets/trees.mp4";
import Image from "../assets/image_description.png"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Exit from "../assets/Exit.png"
import Back from "../assets/Back.png"
import Done from "../assets/Done.png"

const FirstMission = () => {
    return (
        <div
          name="The main container for missions page"
          className="flex flex-row justify-center items-start w-screen h-screen"
        >
          <video className="absolute h-full w-full" autoPlay loop muted>
            <source src={BackgroundGif2} type="video/mp4"></source>
          </video>
    
          <div className="z-10 flex flex-col justify-start items-center w-3/5 mt-5 ml-5 mr-2.5 mb-12 h-5/6 p-5 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
           
          <img src = {require('../assets/image_description.png')} ></img>
            {/* <h1
              class="title-text"
              className="text-white text-7xl -ml-10 font-VT323 pr-5"
            >
              PYTHON MISSIONS
            </h1> */}
            
            {/* <div className="z-10 flex flex-col"  
            
            
            */}
        
          </div>
          
          <div className="z-10 flex flex-col justify-start items-center w-2/5 mt-5 mr-5 h-5/6 bg-zinc-0 rounded-2xl">
                  
              <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="10000" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>            
              <div className="z-10 flex flex-row justify-center items-center w-5/6 h-5/6">
        <Link
                to="/missions"
                className="w-5/6 h-5/6 flex flex-col items-center">

                <image
                className="start z-20 w-2/6 pt-10 h-5/6 bg-transparent hover:cursor-pointer"
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
{/* DONE BUTTON */}
        <Link
                to="/end"
                className="w-5/6 h-5/6 flex flex-col items-center">
                <image
                //className="z-20 w-5/6 h-5/6 px-10 -mb-2 py-1 bg-transparent hover:cursor-pointer"'
                className="z-20 w-2/6 h-5/6 pt-10 bg-transparent hover:cursor-pointer"
                style={{
                  backgroundImage: `url(${Done})`,
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
                className="z-20 w-2/6 h-5/6 pt-10 bg-transparent hover:cursor-pointer"
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
          {/* </div>
          <div id="myModal" class="modal">
        <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
        </div> */}

</div>
              
              {/* <div className="w-full flex flex-col justify-start -mt-2 items-center p-1 h-3/6">
                <Link
                  to="/home"
                  target="_blank"
                  className="-mb-4 w-5/6 h-5/6 flex flex-col items-center"
                >
                  <image
                    className="w-5/6 h-5/6 px-10 -mb-2 py-1 bg-transparent hover:cursor-pointer"
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
              </div>           */}
              
            
    
    
        </div>
      )
    }

export default FirstMission
// //MODAL CODE:
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("donebtn");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// TWO CARDS CODE:
/* <section>
<h1>Row of Cards</h1>
<div class="cardRow">
  <div class="clusterCard">
    <div class="contentCluster">
      <h3>A Card</h3>
      <p>Shorter description!</p>
    </div>
    <button>Learn More</button>
  </div>
  <div class="clusterCard">
    <div class="contentCluster">
      <h3>A Card</h3>
      <p>
        Medium Description.
      </p>
    </div>
    <button>Learn More</button>
  </div>
  <div class="clusterCard">
    <div class="contentCluster">
      <h3>A Card</h3>
      <p>
        test
      </p>
    </div>
    <button>Learn More</button>
  </div>
</div>
</section> */

//CARD ROW CSS:
// .cardRow {
//     display: flex;
//     gap: 20px;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
  
//   .clusterCard {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }