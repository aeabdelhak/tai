import React, { useContext, useState } from "react";
import { MyContext } from "../utils/JWTAuth";
import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Bell,User ,Key,LogIn,UserPlus } from 'react-feather';

const axios = require("axios");
export default function Login() {
  const router = useRouter()
  const { toggleNav, loginUser, isLoggedIn } = useContext(MyContext);
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const initialState = {
    userInfo: {
      username: "",
      password: "",
    },
    errorMsg: "",
    successMsg: "",
  };

  const [state, setState] = useState(initialState);

  // On change input value (email & password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // On Submit Login From
  const submitForm = async (event) => {
 event.preventDefault();
    const data = await loginUser(state.userInfo);
    console.log(data)
    if (data.success && data.token) {
      setState({
        ...initialState,
      });
      localStorage.setItem("loginToken", data.token);
      await isLoggedIn();
    } else {
      setState({
        ...state,
        successMsg: "",
        errorMsg: data.message,
      });
    }
  };

  // Show Message on Error or Success
  let successMsg = "";
  let errorMsg = "";
  if (state.errorMsg) {
    errorMsg = state.errorMsg;
  }
  if (state.successMsg) {
    successMsg = state.successMsg;
  }
if (isAuth){
  router.push("/");

}
else{
   return (
    <div className="h-screen fixed z-40 w-screen bg-white pt-16 transform translate-y-0  transition ease-in-out duration-1000  text-center top-0 p-2">
      <div className="w-full px-10 py-2 flex justify-start ">
        <ChevronDoubleLeftIcon
          className="w-6 cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
      <div className=" max-w-xl w-full mx-auto">
        <h1 className="p-16 text-6xl uppercase">logo</h1>
        <h1 className="my-2">LOG IN</h1>
        {errorMsg}
        {successMsg}
        <form onSubmit={submitForm} method="post" className="space-y-4" >
          <div className=" text-left flex items-center space-x-2 bg-gray-200 rounded-md">
            <User strokeWidth={1} className="text-xs mx-3"/>
            <input
              type="text"
              placeholder="Username/Email"
              name="username"
              value={state.userInfo.username}
              onChange={onChangeValue}
              className="w-full  border-none focus:ring-0 focus:outline-none rounded-lg p-2"
            />
          </div>
          <div className=" text-left flex items-center space-x-2 bg-gray-200 rounded-md">
            <Key strokeWidth={1} className="text-xs mx-3"/>
            <input
              type="password"
              name="password"
              value={state.userInfo.password}
              onChange={onChangeValue}
              placeholder="Password"
              className="w-full  border-none focus:ring-0 focus:outline-none rounded-lg p-2"
            />
          </div>
          <div className=" py-3 select-none text-left">
            <label>
              <input type="checkbox" /> Remembre Me
            </label>
          </div>

          <div className="flex items-center py-3">
            <input
              type="submit"
              value="LOG IN"
              className="w-full focus:outline-none  p-2 bg-blue-600 text-white focus:ring"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
 
  
}
