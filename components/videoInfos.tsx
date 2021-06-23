import React, { useCallback, useState } from "react";
import {
  BellIcon,
  PhotographIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const VideoInfos = ({setcategory,categories,clicked,click, thmb, setthumb,settitle,setdesc,setstate }) => {
  const hiddenFileInput = React.useRef(null);
  const thumbnail = React.useRef(null);
  const [prev,setprev]=useState("");
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const[ischecked,Check]=useState("public");
  const thumb = useCallback(
    (event) => {
      setthumb(event.target.files[0]);
      setprev(URL.createObjectURL(event.target.files[0]))
    },
    [setthumb]
  )
  const state = useCallback(
    (event) => {
      setstate(event);
    },
    [setstate]
  )
  const title = useCallback(
    (event) => {
      settitle(event.target.value);
    },
    [settitle]
  )
  const desc = useCallback(
    (event) => {
      setdesc(event.target.value);
    },
    [setdesc]
  )
  const submit=()=>{
    ()=>useCallback(()=>click(!clicked),[click])
    console.log(clicked)
  }
const category= useCallback(
  (event) => {
    setcategory(event.target.value);
  },
  [setcategory]
)
  return (
 
      <div className="  h-auto w-full  max-w-7xl mx-auto  ">

        <div className="grid h-full bg-white  rounded-2xl overflow-hidden lg:grid-cols-3">
          <div className=" col-span-2 w-full p-1">
            <div className="  p-2 mb-1">
              <h1 className=" text-sm text-gray-600">title: </h1>
              <input
                type="text"
                placeholder="title"
                className="bg-gray-200 input"
                onChange={title}
              />
            </div>
            <div className="  p-2 mb-1">
              <h1 className=" text-sm text-gray-600">description: </h1>
              <textarea rows={6}
                placeholder="descritiopn"
                className="bg-gray-200 input "
                onChange={desc}

              >
                
              </textarea>
            </div>
            <div className="  p-2 mb-1">
            <h1 className=" text-sm text-gray-600">category: </h1>
            <select name="" id="" className="p-2  input" onChange={category}>
             <option value="0">select the category </option>

          {categories.map((e)=>(
             <option value={e.idCategory}>{e.category} </option>
           ))} 
            </select>
            </div>
          </div>
          <div className="shadow-lg h-full p-3">

          <h1 className=" text-sm text-gray-600">thumbnail: </h1>

            <div className="h-48 text-center cursor-pointer border-gray-400 border-2 relative overflow-hidden mx-auto w-80 ">
              <div
                onClick={() => {
                  thumbnail.current.click();
                }}
                className="h-full w-full bg-black bg-opacity-25 opacity-25 hover:opacity-100 absolute top-0 grid place-items-center"
              >
                <div className="text-center ">
                      <PhotographIcon className="w-10 text-white" />
          <h1 className=" text-sm text-white">thumbnail: </h1>
                </div>
            

              </div>
              <input
                type="file"
                className="hidden"
                ref={thumbnail}
                onChange={thumb}
              />
              {thmb && <img src={prev} />}
            </div>
            <hr />
            <h1 className="text-center p-3">set this video :</h1>
            <label htmlFor="public" onClick={()=>{Check("public"); state("1")}}  className={ischecked==="public" ?"navlink bg-gray-500 text-white hover:bg-gray-600": "navlink "}>
              <input type="radio" name="state" id="public" value="1"className="hidden" />
              public{" "}
            </label>
            <br />
            <label htmlFor="private" onClick={()=>{Check("private"); state("0")}}  className={ischecked==="private" ?"navlink bg-gray-500 text-white hover:bg-gray-600": "navlink "} >
              <input type="radio"  name="state" id="private" value="0"  className="hidden "/>
              private{" "}
            </label>
          </div>
        </div>
      </div>

  );
};

export default VideoInfos;
