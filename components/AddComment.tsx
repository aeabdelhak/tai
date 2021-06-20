import { AnnotationIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useState } from "react";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";

const AddComment = ({id}) => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const [comment ,setComment]=useState("")
  const formData=new FormData();
  const changeHandle=(e)=>{
    setComment(e.target.value)
  }
  const submit =(event)=>{
event.preventDefault();
    formData.append("comment",comment)
    formData.append("idVideo",id)
    formData.append("username",theUser.username)
    axios.post("http://ff2c283ec086.ngrok.io/api/addComment.php",formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      }

      })
      .then(res =>console.log(res))
    setComment("")
  }
  return (
    <div className="bg-white shadow text-right ">
        <form action="" method="post" onSubmit={submit} className="flex items-center p-2  bg-white shadow-md">
     
      <div className="flex space-x-2 items-center w-full p-2 ">
       
        <div className="w-8 h-8 rounded-full bg-gray-200">
{/* <Image src /> */}
        </div>
        <input
          type="text"
          className="p-2 w-full rounded-lg border-gray-300 border  "
          placeholder="add comment"
          onChange={changeHandle}
          value={comment}
        />
      </div>
      <button className=" px-3 py-2 flex items-center space-x-2 w-auto whitespace-nowrap justify-center bg-green-100 text-green-600 hover:font-bold hover:bg-green-200" onClick={submit}>
        <h1>add Comment</h1>
        <AnnotationIcon className="w-5" />
      </button>
      </form>
    </div>
  );
};

export default AddComment;
