import Image from "next/image";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/solid";
import { ChatAlt2Icon, ThumbUpIcon } from "@heroicons/react/outline";
import { useState } from "react";
import React, { useCallback } from "react";

const ThumbForEdit = ({ data }) => {
  console.log(data)
  const [file, setFile] = useState();
  const [title, setTitle] = useState(data.title);
  const [state, setState] = useState(data.state);
  const stat = (e) => setState(e.target.value);
 
  const setTit = (e) => {
    setTitle(e.target.value);
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const filetoUpload = (event) => {
    setFile(event.target.files[0]);
  };
  const router = useRouter();
  const [show, setshow] = useState(false);
  const [edit, showedit] = useState(false);
 const editshow=()=>{
  showedit(!edit)
  }
  return (
    <div className="w-full p-2 pr-4  flex space-x-3   elevation-2 mb-2 max-w-7xl mx-auto">
      <div className="grid place-items-center bg-black fixed h-screen w-screen duration-500 ease-out  bg-opacity-50 top-0 z-30 right-0 overflow-x-auto ">
      <div className="max-w-lg w-full p-2 rounded-lg bg-white elevation-2">
        <h1>delete this video!</h1>
        <div className="flex w-full justify-evenly">
          
        </div>
      </div>
      </div>

      {edit &&
      <div className="grid place-items-center bg-black fixed h-screen w-screen duration-500 ease-out  bg-opacity-50 top-0 z-30 right-0 overflow-x-auto ">
        <div className={edit ?
        "w-full max-w-4xl bg-white p-2 rounded transition-all transform scale-100 duration-500 ease-out":
        "w-full max-w-4xl bg-white p-2 rounded transition-all transform scale-0 duration-500 ease-out"
        }>
          <div className="flex w-full justify-end space-x-3">
            <button className="px-3 py-2 border-red-300 hover:bg-red-200 focus:border-current focus:outline-none  transition-all duration-500 border text-red-600 rounded-lg" onClick={editshow}>
              cancel
            </button>
            <button className="px-3 py-2 border-blue-300 hover:bg-blue-200 focus:border-current focus:outline-none  transition-all duration-500 border text-blue-600 rounded-lg">
              save
            </button>
          </div>
          <label htmlFor="title ">title:</label>{" "}
          <input
            onChange={setTit}
            type="text"
            id="title"
            className="rounded-lg w-full appearance-none border-gray-300"
            defaultValue={data.title}
          />
          <label htmlFor="description ">description:</label>{" "}
          <textarea
            id="description"
            className="rounded-lg w-full appearance-none border-gray-300"
            value={data.description}
          ></textarea>
          <div className="space-y-2 my-2">
            <label className="block">
              {" "}
              <input
                type="radio"
                name="state"
                value="0"
                className="mr-2"
                onClick={stat} 
                checked
              />
              public
            </label>
            <label className="block">
              {" "}
              <input
                type="radio"
                name="state"
                value="1"
                className="mr-2"
                onClick={stat}
              />
              private
            </label>
          </div>
          <hr />
          <input
            onChange={filetoUpload}
            type="file"
            ref={hiddenFileInput}
            className="hidden"
          />
          <button
            onClick={handleClick}
            className="bg-blue-600 rounded-lg block text-white px-3 py-2"
          >
            upload new thumbnail
          </button>
        </div>
      </div>
      }

      <div className=" md:h-36 md:w-64 z-0 h-full  overflow-hidden ">
        <img src={"https://db336d2d3fd5.ngrok.io/" + data.miniature} />
      </div>
      <div className="w-full">
        <div className="flex w-full relative justify-end  ">
          <MenuIcon
            onClick={() => setshow(!show)}
            className="w-5 cursor-pointer"
          />
          <div
            className={
              show
                ? "absolute overflow-hidden right-6 top-0 transition-all duration-500 ease-in-out not-sr-only w-32 bg-white elevation-2  "
                : "absolute overflow-hidden right-6 top-0 transition-all duration-500 ease-in-out sr-only w-32 bg-white elevation-2  "
            }
          >
            <h1
              onClick={() => {
                router.push("/play?v=" + data.idVideo);
              }}
              className="px-3 py-1 border text-sm hover:bg-gray-200 cursor-pointer capitalize"
            >
              go to video
            </h1>
            <h1 className="px-3 py-1 border text-sm hover:bg-gray-200 cursor-pointer capitalize" onClick={editshow}>
              edit
            </h1>
            <h1 className="px-3 py-1 border text-sm hover:bg-gray-200 cursor-pointer capitalize">
              delete
            </h1>
          </div>
        </div>
        <h1>{data.title}</h1>
        <div className="flex items-center font-light py-1 ">
          <div className="h-5 w-5 rounded-full bg-black mr-2"></div>
          <h1>channel Name</h1>
        </div>
        <div className="flex font-light text-xs items-center py-1">
          <ThumbUpIcon className="w-5 mr-2" />
          <h1>15.5 k</h1>
          <ChatAlt2Icon className="w-5 mx-2" />
          <h1>15.5 k</h1>
        </div>
      </div>
    </div>
  );
};

export default ThumbForEdit;
