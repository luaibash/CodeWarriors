import { React, useState } from "react";
import Home from "./components/Home.jsx";
import BackgroundGif from "./assets/mountain.mp4";
import buttonBackground from "./assets/Login.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styles from "./index.css";

function LoginModal() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let slash = "/";
  let blank = "";
  
  if(username==="asmodeus" && password=="password")
  {
    slash = "/home";
    blank = "_blank";
    console.log(slash,blank)
  }
  else
  {
    slash="/";
    blank="";
    console.log(slash,blank)
  }

  const usernameChanged = (event) =>
  {
    //The event is an object that contains
    //all the properties of the element that called this function
    //If you go to both input elements there is an "onChange" attribute
    //Everytime something is changed inside the input, it will call this function
    //Open up developer console and type something into the username input and see what outputs
    console.log(event.target.value);
    // console.log(slash, blank);
    setUsername(event.target.value);
  }

  const passwordChanged = (event) =>
  {
    console.log(event.target.value);
    // console.log(slash, blank)
    setPassword(event.target.value);
  }

  return (
    <div
      name="The main container for login page"
      className="flex flex-col justify-end items-center w-screen h-screen"
    >
      <video className="absolute h-full w-full" autoPlay loop muted>
        <source src={BackgroundGif} type="video/mp4"></source>
      </video>
      <h1 class="site-name" className="font-VT323 text-8xl p-4 z-20">
        Code Warriors
      </h1>
      <div className="z-10 flex flex-col justify-center items-center w-1/3 mb-8 h-4/6 p-5 bg-zinc-800 border-2 border-slate-900 rounded-2xl">
        <h1
          class="title-text"
          className="text-white text-center text-3xl -mt-20 font-VT323"
        >
          Are you ready to start your adventure?
        </h1>
        <form class="input-container">
          <div class="email-container">
            <p class="input-header" className="text-2xl mt-5 font-VT323">
              Username:
            </p>
            <input 
              value={username}
              onChange={usernameChanged} 
              id="username-input" 
              type="email" 
              className="rounded-xl bg-zinc-900" required />
          </div>
          <div class="password-container">
            <p class="input-header" className="text-2xl mt-2 font-VT323">
              Password:
            </p>
            <input
              value={password}
              onChange={passwordChanged}
              id = "password-input"
              type="password"
              className="rounded-xl bg-zinc-900"
              required
            />
          </div>
          <p className="font-xl text-blue-500 pb-5">
            <span className="font-VT323 text-lg hover:underline hover:cursor-pointer">
              Forgot your password?
            </span>
          </p>
          <div className="w-full flex flex-col justify-start -mt-2 items-center p-1 h-3/6">
            <Link
              to={slash}
              target={blank}
              className="-mb-4 w-5/6 h-5/6 flex flex-col items-center"
            >
              <image
                className="w-5/6 h-5/6 px-10 -mb-2 py-1 bg-transparent hover:cursor-pointer"
                style={{
                  backgroundImage: `url(${buttonBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundSize: "100%",
                  imageRendering: "pixelated",
                }}
              ></image>
            </Link>
            <p className="pb-4">
              New?{" "}
              <span className="font-VT323 text-blue-500 text-lg hover:underline hover:cursor-pointer">
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

