import EmblaCarousel from "embla-carousel";
import { useEmblaCarousel } from "embla-carousel/react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import FileUplad from "../components/fileUplad";
import { MyContext } from "../utils/JWTAuth";

import VideoInfos from "../components/videoInfos";
import axios from 'axios'
const upload = () => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const [emblaRef] = useEmblaCarousel();
  const[file ,setFile]=useState()
  const[filename ,setFilename]=useState<string>()

function getExtension(filename) {
  const file=String(filename) 
  
 var parts = file.split('.');
  return parts[parts.length - 1];  
}
function isVideo(filename) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
      // etc
      return true;
    }
    
  }
useEffect(()=>{
const video=isVideo(filename)
  if (video){
    const formData =new FormData();
    formData.append("file",file)
    formData.append("user",theUser.username)
   fetch("https://aeabdelhak.herokuapp.com/upload.php",{
     method: "POST",
     body:formData
   }).catch(err=>console.log(err))
  }
},[file])

  return (
    <div className="pt-16 md:ml-28 pb-10 xl:ml-80   h-screen w-full">
      <div className="p-2 w-full   text-center">
        <h1>uplaod a new video</h1>
      </div>
      <div className=" overflow-hidden h-full" ref={emblaRef}>
      <div className="flex h-full">

<FileUplad setFile={setFile} filename={setFilename}/>


      </div>
      </div>
    </div>
  );
};

export default upload;
