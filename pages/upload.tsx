import EmblaCarousel from "embla-carousel";
import { useEmblaCarousel } from "embla-carousel/react";
import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import FileUplad from "../components/fileUplad";
import ChannelSelect from "../components/ChannelSelect";
import { MyContext } from "../utils/JWTAuth";
import Circle from "react-circle";
import VideoInfos from "../components/videoInfos";
import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";
import Select from "react-select";
import { WaveTopBottomLoading } from 'react-loadingg';
import { toast, ToastContainer } from 'react-nextjs-toast'
import router from "next/router";
import {
  BellIcon,
  PhotographIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
export default function Upload() {
  const { rootState, logoutUser, getchannels } = useContext(MyContext);
  const { isAuth, theUser, showLogin, channels } = rootState;
  const [data, setdata] = useState<any>();

  const get = async () => {
    
      const token = theUser.username;
      const res = await fetch(
        `http://ff2c283ec086.ngrok.io/api/getChannels.php?user=${token}`,
        {
          headers: { Authorization: token },
        }
      );
      const dt = await res.json();
      setdata(dt);
    
    
  };
  function getExtension(filename) {
    const file = String(filename);

    var parts = file.split(".");
    return parts[parts.length - 1];
  }
  function isVideo(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case "m4v":
      case "avi":
      case "mpg":
      case "mp4":
        // etc
        return true;
    }
  }
 

  const[acces,accessing]=useState(false)
  const [key, setKey] = useState();
  const [thmb, setthumb] = useState();
  const [progressen, setProgressn] = useState(0);
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [desc, setdesc] = useState();
  const [state, setstate] = useState("1");
  const [filename, setFilename] = useState<string>();
  const [id, setid] = useState("");
  const [click, setClik] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isAuth) {
      const video = isVideo(filename);
      if (video) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("username", theUser.username);
        formData.append("key", key);
        axios
          .post("http://ff2c283ec086.ngrok.io/api/upload.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percent = Math.fround((loaded * 100) / total);
              let percentn = Math.floor((loaded * 100) / total);
              
              document.getElementById("prg").style.height = percentn+"%";
              setProgressn(percentn);
              setShow(true);
            },
          })
          .then((response) => setid(response.data.id));
      }
    }
  }, [file]);
     const submit = () => {
    accessing(true)
    const formData = new FormData();
    formData.append("username",theUser.username)
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("state", state);
    formData.append("thmb", thmb);
    formData.append("id", id);

    axios
      .post("http://ff2c283ec086.ngrok.io/api/upload.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        accessing(false)
        if (response.data.success) {
          router.push("/play?v="+id);
        }
        else {
          toast.notify(response.data, {
            duration: 5,
            type: "error"
          })
        }
      });
  };  
  const channel = (event) => {
    setKey(event.target.value);
  };
 if (isAuth) {
      get();


  return (
    <div className="pt-16 pb-10    h-screen w-full">
      {acces &&
<div className="grid place-items-center h-full w-full fixed top-0 bg-white bg-opacity-30 backdrop-blur-md ">       

       <WaveTopBottomLoading/>

     </div>
}

      <div className="fixed overflow-hidden bottom-5 border-blue-500 border-2 right-5 w-20 h-20 grid place-items-center z-10 bg-white rounded-full ">
<div className="absolute z-0 flex items-end h-full w-full">
<div className="w-full bg-blue-500" id="prg"></div>
</div>
       <h1 className={progressen < 50 ?"text-gray-600 z-10 " :"text-white z-10" }>
         {progressen < 100 && progressen }
         </h1> 
        <h1
          className={
            progressen == 100 
              ? "text-center z-10 text-2xl not-sr-only transition-all duration-500 "
              : "text-center text-2xl sr-only transition-all duration-500"
          }
        >
          done
        </h1>
      </div>
      <div className="p-2  ">
        <h1 className="text-center">uplaod a new video</h1>
      </div>{" "}
      <div className="w-full max-w-7xl mx-auto px-10  flex justify-end text-right p-3">
        {id !== "" && (
          <button
            className="p-2 px-4  bg-blue-600 space-x-2 text-white flex hover:rounded-full duration-600 transition  "
            onClick={submit}
          >
            <h1>save</h1>
            <ChevronRightIcon className="w-6 " />
          </button>
        )}
      </div>{" "}

      {data!=="no channel"?

     
      <div className="mt-8 bg-white rounded-lg shadow max-w-7xl mx-auto">

      
        <div className=" h-auto w-full  max-w-7xl mx-auto flex p-4" >
          <div className="flex w-full items-center space-x-2">
            <div className="rounded-full overflow-hidden relative h-7 w-7  ">
              <Image src="https://picsum.photos/200/200" layout="fill" />
            </div>
            <select
              className="w-full border-none ring-0 appearance-none outline-none"
              onChange={channel}
            >
              <option value="0">Select the Channel</option>
              {data &&
                data.map((dt) => <option value={dt.idChannel}>{dt.nameChannel}</option>)}
            </select>
          </div>

          {data && (
            <FileUplad chId={key} setFile={setFile} filename={setFilename} />
          )}
        </div>

        {data && (
          <VideoInfos
            clicked={click}
            click={setClik}
            thmb={thmb}
            setthumb={setthumb}
            settitle={setTitle}
            setdesc={setdesc}
            setstate={setstate}
          />
        )}
      </div>
      :
      <div className=" bg-gray-300 h-full w-full items-center flex justify-center space-x-2">
      <div className="space-y-4">
         <h1 className="text-6xl">
    you haven‘t created a channel yet      </h1>
    <h1 className="text-xl">
     please! create one to uplad new video
    </h1>
      <button className="p-2 px-3 text-red-700 bg-red-200 uppercase " onClick={()=>router.push("/createChannel")}>
        create your channel
      </button>
      </div>
   
 
    </div>
       }
</div>
  );
}
else {
  return(
  <div className="w-screen h-screen grid place-content-center">
<h1 className="text-4xl">
  you re not allowed to uplad content
</h1>
  </div>
)
}
}
