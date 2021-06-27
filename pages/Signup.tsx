import { XIcon } from "@heroicons/react/solid";
import React, { useState, useCallback, useEffect } from "react";
import Cookie from "js-cookie";
const axios = require("axios");
import { useRouter } from "next/router";
import { MyContext } from "../utils/JWTAuth";
import { useContext } from "react";

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

  const initialState = {
    userInfo: {
      name: "",
      email: "",
      password: "",
      username: "",
      adresse: "",
    },
    errorMsg: "",
    successMsg: "",
  };
  const [state, setState] = useState(initialState);

  const [logLoad, setLogload] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    const data = await registerUser(state.userInfo);

    if (data.success) {
      setState({
        ...initialState,
        successMsg: data.message,
      });
      router.push("Login");
    } else {
      setmessage(data);
    }
  };

  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  let successMsg;
  let errorMsg;

  return (
    <div className="h-screen dark:bg-gray-900 scrollbar-thumb-gray-500 scrollbar-thin dark:text-gray-100  z-40 w-screen bg-white pt-16 transform translate-y-0  transition ease-in-out duration-1000  text-center top-0 p-2">
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
       
        <form onSubmit={submitForm} noValidate className="p-3 rounded dark:bg-gray-800 ">
        <h1 className="my-2">LOG IN</h1>
        <h1 className="text-sm dark:text-red-400 text-red-500">{message}</h1>

        <hr />
          <div className=" py-3 text-left">
            <h1 className="text-xs">full name: </h1>
            <input
              required
              type="text"
              name="name"
              value={state.userInfo.name}
              onChange={onChangeValue}
              placeholder="Enter your name"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>
          <div className=" py-3 text-left">
            <h1 className="text-xs">Username: </h1>
            <input
              required
              type="text"
              name="username"
              value={state.userInfo.username}
              onChange={onChangeValue}
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
              value={state.userInfo.password}
              onChange={onChangeValue}
              placeholder="Enter your password"
              className="w-full  bg-transparent  border-0 border-b focus:outline-none p-2"
            />
          </div>
          <div className=" py-3 text-left">
            <h1 className="text-xs">email: </h1>
            <input
              required
              type="email"
              name="email"
              value={state.userInfo.email}
              onChange={onChangeValue}
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
              value={state.userInfo.adresse}
              onChange={onChangeValue}
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
