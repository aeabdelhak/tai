import EmblaCarousel from "embla-carousel";
import { useEmblaCarousel } from "embla-carousel/react";
import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import FileUplad from "../components/fileUplad";
import ChannelSelect from "../components/ChannelSelect";
import { MyContext } from "../utils/JWTAuth";

import VideoInfos from "../components/videoInfos";
import axios from "axios";
import { GetStaticProps } from "next";
const upload = ({data}) => {
  console.log(data)
  const [key, setKey] = useState();
  const [thmb, setthumb] = useState();
  const [progresse, setProgress] = useState(0);
  const [progressen, setProgressn] = useState(0);
 const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
 
  const [file, setFile] = useState();
  const [filename, setFilename] = useState<string>();

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
    const video = isVideo(filename);
    if (video) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("username", theUser.username);
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
            setProgress(percent);
            setProgressn(percentn);
            setShow(true);
          },
        })
        .then((response) => console.log(response));
    }
  }, [file]);

  useEffect(() => {
    document.getElementById("progress").style.width = progresse + "%";
    document.getElementById("perc").style.left = progresse + "%";
  }, [progresse]);
  useEffect(() => {
    scrollNext()
  }, [key]);

  return (
    <div className="pt-16 pb-10    h-screen w-full">
      <div className="p-2 w-full  ">
        <h1 className="text-center">uplaod a new video</h1>
        <div className="w-full  ">
          <h1
            id="perc"
            className="text-xs justify-self-end relative duration-300 transition-all"
          >
            {show && progressen + "%"}
          </h1>

          <div
            className="h-1 rounded-full  duration-300 transition-all  animate-pulse bg-green-900"
            id="progress"
          ></div>
        </div>
      </div>
      <div className=" overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          <ChannelSelect id={setKey} />
          <FileUplad setFile={setFile} filename={setFilename} />
          <VideoInfos thmb={thmb} setthumb={setthumb} />
        </div>
      </div>
    </div>
  );

};

export default upload;




  
