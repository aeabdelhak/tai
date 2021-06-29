import React, { useState, useCallback, useEffect } from "react";
const axios = require("axios");
import { useRouter } from "next/router";
import { MyContext } from "../utils/JWTAuth";
import { useContext } from "react";
import { toast } from "react-toastify";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {

  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const { toggleNav, registerUser } = useContext(MyContext);

  const router = useRouter();
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var [message, setmessage] = useState("");
  var [email, setEmail] = useState("");
  var [name, setName] = useState("");
  var [adresse, setAdresse] = useState("");
  const [user, setUser] = useState();

  
  const [logLoad, setLogload] = useState(false);

  const submitForm = async (event) => {
    let stg=0
    event.preventDefault();
    if(username==""){
      toast.error("please add username");
stg++
    }
    if(password=="")
 {stg++
      toast.error("please set a password");}
    if(adresse=="")
{    toast.error("please set an adresse");
stg++}
if(stg==0)
    axios.post("http://localhost/api/signup.php",{
      username:username,
      password:password,
      email:email,
      adresse:adresse,
      name:name

    }).then(res => {
      if(res.data.success)
      router.push("/Login")
      else setmessage(res.data)
    })
 }

  return (
    <div className="h-screen dark:bg-gray-900 scrollbar-thumb-gray-500 scrollbar-thin dark:text-gray-100  z-40 w-screen bg-gray-200 pt-16 transform translate-y-0  transition ease-in-out duration-1000  text-center top-0 p-2">
      {logLoad && (
        <div
          className="fixed h-screen w-screen grid place-items-center bg-white bg-opacity-60 z-20 
                "
        >
          <h1 className="p-3 bg-white">loading</h1>
        </div>
      )}

      <div className=" max-w-xl w-full mx-auto">
        <h1 className="p-16 text-center text-3xl w-full uppercase">
          <img src="1.svg" alt="" className="mx-auto h-32" />
        </h1>
       
        <form onSubmit={submitForm} className="p-3 rounded-lg bg-white shadow dark:bg-gray-800 ">
        <h1 className="my-2">SIGN UP</h1>
        <h1 className="text-sm dark:text-red-400 text-red-500">{message}</h1>

        <hr />
          <div className=" py-3 text-left">
            <h1 className="text-xs">full name: </h1>
            <input
              required
           
              type="text"
              name="name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Enter your name"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>
          <div className=" py-3 text-left">
            <h1 className="text-xs">Username: </h1>
            {/* {state.validate.username &&
            <h1 className="text-xs text-red-400">this username is already taken <button className="focus:outline-none px-2 underline "> login here </button> 
            </h1>
            } */}
            <input
              required
              type="text"
              name="username"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              placeholder="Enter your username"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>
          <div className=" py-3 text-left">
            <h1 className="text-xs">Password: </h1>
            <input
              required
           
              type="password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter your password"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>
          <div className=" py-3 text-left">
            <h1 className="text-xs">email: </h1>
          {/*   {state.validate.username &&
            <h1 className="text-xs text-red-400">this username is already taken <button className="focus:outline-none px-2 underline "> login here </button> 
            </h1>
            } */}
            <input
              required
           
              type="email"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter your email"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>
          <div className=" py-3 text-left">
            <h1 className="text-xs">adresse: </h1>
            <input
              required
           
              type="adresse"
              name="adresse"
              value={adresse}
              onChange={(e)=>{setAdresse(e.target.value)}}
              placeholder="Enter your adresse"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>

          <div className="flex items-center py-3">
            <input
              type="submit"
              value="SIGN UP"
              className="w-full focus:outline-none  p-2 bg-blue-600 text-white focus:ring"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
