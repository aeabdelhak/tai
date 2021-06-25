import { faUpload } from "@fortawesome/free-solid-svg-icons";
import {
  CollectionIcon,
  TrashIcon,
  CogIcon,
  KeyIcon,
} from "@heroicons/react/outline";
import { UploadIcon } from "@heroicons/react/solid";
import axios from "axios";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { MyContext } from "../utils/JWTAuth";

export default function profile() {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const gohome = () => router.replace("/");
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  let name=""
  let email=""
  let username=""
  let adresse=""
  if (isAuth){
     name=theUser.name
  email=theUser.email
   username=theUser.username
     adresse=theUser.adresse
  }



  const initialState = {
    
    userInfo: {
      name: name,
      email: email,
      username: username,
      adresse: adresse,
    },
  };
  const [file, setFile] = useState<any>("");
  const [message, setmessage] = useState("");
  const [password, setpassword] = useState("");
  const [npassword, setnpassword] = useState("");
  const [showinfo, setinf] = useState(false);
  const [pd, setpd] = useState(false);
  const av = (event) => setFile(event.target.files[0]);

  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };
  const [state, setState] = useState(initialState);
const pass=()=>{
  const form=new FormData()
  form.append("username",theUser.username)
  form.append("password",password)
  form.append("npassword",npassword)
  axios.post("http://localhost/api/profile.php",form,{

  }).then(res=>{
    if (res.data=="success"){
      setmessage(res.data)
    }
    else
    setmessage(res.data)
  })
}

  const submitForm = async (event) => {
    event.preventDefault();
    const form=new FormData()
    form.append("name",state.userInfo.name)
    form.append("user",theUser.username)
    form.append("username",state.userInfo.username)
    form.append("adreesse",state.userInfo.adresse)
    form.append("email",state.userInfo.email)
    form.append("file",file)
    axios.post("http://localhost/api/profile.php",form,{
      headers:{
        "Content-Type": "multipart/form-data",
      }
    }).then(res=>{
      if (res.data=="success"){
        localStorage.setItem("loginToken",state.userInfo.username);
        router.reload()
      }
      else
      setmessage(res.data)
    })

  };
  if (isAuth)
    return (
      <>
      {showinfo &&
        <div className="fixed bg-white bg-opacity-20 grid place-items-center ovreflow-y-auto top-0 right-0 h-screen w-screen">
          <div className="bg-white elevation-2 rounded max-w-xl w-full  p-2">
                         <div className="flex my-2 items-center justify-between gap-1 flex-wrap ">
                <h1 className="text-xs italic "> avatar:</h1>

                <button
                  onClick={handleClick}
                  className="px-3 py-2 focus:outline-none flex gap-1 items-center text-blue-600"
                >
                  <UploadIcon width={16} /> <h1>upload</h1>
                </button>
              </div>
               <form className="w-full" onSubmit={submitForm}>
              <h1 className="text-center text-xs text-red-600">
                {message}
              </h1>
              <input
                ref={hiddenFileInput}
                type="file"
                name="avatar"
                onChange={av}
                className="hidden"
              />

              <div className="flex my-2 items-center justify-start gap-1 flex-wrap ">
                <h1 className="text-xs italic "> username:</h1>
                <input
                  type="text"
                  name="username"
                  defaultValue={theUser.username}
                  onChange={onChangeValue}
                  className="rounded border-gray-300 w-full "
                />
              </div>
              <div className="flex my-2 items-center justify-start gap-1 flex-wrap ">
                <h1 className="text-xs italic "> full Name:</h1>
                <input
                  type="text"
                  name="name"
                  defaultValue={theUser.name}
                  onChange={onChangeValue}
                  className="rounded border-gray-300 w-full "
                />
              </div>
              <div className="flex my-2 items-center justify-start gap-1 flex-wrap ">
                <h1 className="text-xs italic "> adresse:</h1>
                <input
                  type="text"
                  name="adresse"
                  defaultValue={theUser.adresse}
                  onChange={onChangeValue}
                  className="rounded border-gray-300 w-full "
                />
              </div>
              <div className="flex my-2 items-center justify-start gap-1 flex-wrap ">
                <h1 className="text-xs italic "> email:</h1>
                <input
                  type="email"
                  name="email"
                  defaultValue={theUser.email}
                  onChange={onChangeValue}
                  className="rounded border-gray-300 w-full "
                />
              </div>
            </form>{" "}
            <div className="flex justify-end">
              <button onClick={()=>setinf(false)} className="px-3 py-2 focus:outline-none flex gap-1 items-center text-red-600">
                <h1>close</h1>
              </button>
              <button onClick={submitForm} className="px-3 py-2 focus:outline-none flex gap-1 items-center text-blue-600">
                <h1>save</h1>
              </button>
            </div>
          </div>
        </div>
      }
      {pd &&
       <div className="fixed bg-white bg-opacity-20 grid place-items-center ovreflow-y-auto top-0 right-0 h-screen w-screen">
          <div className="bg-white elevation-2 rounded max-w-xl w-full  p-2">
          <div className="flex my-2 items-center justify-start gap-1 flex-wrap ">
          <h1 className="text-center text-xs text-red-600">
                {message}
              </h1>
                <h1 className="text-xs italic "> password:</h1>
                <input
                  type="password"
                  autoComplete="false"
                  onChange={(e)=>setpassword(e.target.value)}
                  className="rounded border-gray-300 w-full "
                />
              </div>
          <div className="flex my-2 items-center justify-start gap-1 flex-wrap ">
                <h1 className="text-xs italic "> new password:</h1>
                <input
                  type="password"
                  onChange={(e)=>setnpassword(e.target.value)}
                  className="rounded border-gray-300 w-full "
                />
              </div>
              <div className="flex justify-end">
              <button onClick={()=>setpd(false)} className="px-3 py-2 focus:outline-none flex gap-1 items-center text-red-600">
                <h1>close</h1>
              </button>
              <button onClick={pass} className="px-3 py-2 focus:outline-none flex gap-1 items-center text-blue-600">
                <h1>save</h1>
              </button>
            </div>
          </div>
        </div>
      }

        <div className="pt-16 gird h-screen w-screen overscroll-y-auto">
          <div className="max-w-2xl bg-white elevation-2 p-2 mx-auto rounded flex flex-col justify-between">
            <div className="">
              {/* showing informatons */}
              <div className="h-20 w-20 rounded-full overflow-hidden mx-auto bg-gray-100 elevation-2">
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className="flex gap-2 items-center justify-evenly flex-wrap p-1 border-b border-gray-600 my-2">
                <div className="flex gap-1">
                  <h1 className="text-xs italic">username:</h1>

                  <h1 className="text-sm"> {theUser.username}</h1>
                </div>
                <div className="flex gap-1">
                  <h1 className="text-xs italic">full name:</h1>

                  <h1 className="text-sm"> {theUser.name}</h1>
                </div>
              </div>
              {/* /////// */}
              {/*  settings */}
              <div onClick={()=>setinf(true)} className="p-2 cursor-pointer  my-2 hover:bg-gray-100 items-center gap-2  bg-white rounded flex ">
                <div>
                  <CogIcon width={16} strokeWidth={1} />
                </div>
                <h1 className="text-base italic">edit your informations</h1>
              </div>
              <div onClick={()=>setpd(true)}  className="p-2 cursor-pointer  my-2 hover:bg-gray-100 items-center gap-2  bg-white rounded flex ">
                <div>
                  <KeyIcon width={16} strokeWidth={1} />
                </div>
                <h1 className="text-base italic">edit your password</h1>
              </div>
              <div className="p-2 cursor-pointer  my-2 hover:bg-gray-100 items-center gap-2  bg-white rounded flex ">
                <div>
                  <CollectionIcon width={16} strokeWidth={1} />
                </div>
                <h1 className="text-base italic">your Channels</h1>
              </div>
              <div className="p-2 cursor-pointer  my-2 hover:bg-gray-100 items-center gap-2  bg-white rounded flex ">
                <div>
                  <CollectionIcon width={16} strokeWidth={1} />
                </div>
                <h1 className="text-base italic">create a Channel</h1>
              </div>
              <div className="p-2 cursor-pointer  my-2 hover:bg-gray-100 text-red-500 items-center gap-2  bg-white rounded flex ">
                <div>
                  <TrashIcon width={16} strokeWidth={1} />
                </div>
                <h1 className="text-base italic">delete your Account</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else return gohome;
}
