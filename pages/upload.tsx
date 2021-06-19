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
    if (isAuth) {
      const token = theUser.username;
      const res = await fetch(
        `https://aeabdelhak.herokuapp.com/getChannels.php?user=${token}`,
        {
          headers: { Authorization: token },
        }
      );
      const dt = await res.json();
      setdata(dt);
    }
  };
  get();
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
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const channel = (event) => {
    setKey(event.target.value);
  };

  const submit = () => {
    accessing(true)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("state", state);
    formData.append("thmb", thmb);
    formData.append("id", id);

    axios
      .post("https://aeabdelhak.herokuapp.com/upload.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        accessing(false)
        if (response.data === "success") {
          router.push("/play");
        }
      });
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

  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isAuth) {
      const video = isVideo(filename);
      if (video) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("username", theUser.username);
        formData.append("key", key);
        scrollNext();
        axios
          .post("https://aeabdelhak.herokuapp.com/upload.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percent = Math.fround((loaded * 100) / total);
              let percentn = Math.floor((loaded * 100) / total);
              setProgressn(percentn);
              setShow(true);
            },
          })
          .then((response) => setid(response.data.id));
      }
    }
  }, [file]);


  return (
    <div className="pt-16 pb-10    h-screen w-full">
      
      {acces &&
<div className="grid place-items-center h-full w-full fixed top-0 bg-white bg-opacity-30 backdrop-blur-md ">       

       <WaveTopBottomLoading/>

     </div>
}

      <div className="fixed bottom-5 right-5 w-20 h-20 grid place-items-center z-10 bg-white rounded-full ">
        <div className="fixed bottom-5 z-0 right-5 w-20 h-20 grid place-items-center bg-white rounded-full animate-ping"></div>
        {progressen !== 100 && <Circle size={80} progress={progressen} />}
        <h1
          className={
            progressen == 100
              ? "text-center text-2xl not-sr-only transition-all duration-500 "
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
              <option>Select the Channel</option>
              {data &&
                data.map((dt) => <option value={dt.id}>{dt.name}</option>)}
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

/* export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://aeabdelhak.herokuapp.com/getChannels.php?user=somene`
  );
  const channels = await res.json();
  if (!channels) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      channels,
    }, // will be passed to the page component as props
  };
}; */
