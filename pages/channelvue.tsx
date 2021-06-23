import { GetStaticProps } from "next";
import Image from "next/image";
import Categories from "../components/Categories";
import NotFound from "../components/NotFound";
import Thumb from "../components/thumb";
import ChannelSidebar from "../components/channelSidebar";
import Sidebar from "../components/sidebar";
import React, { useCallback, useContext } from "react";
import axios from "axios";
import { MyContext } from "../utils/JWTAuth";
import { useState } from "react";
import { BsCardImage } from "@react-icons/all-files/bs/BsCardImage";
import { RiImageEditLine } from "react-icons/ri";
import router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { NineCellLoading } from "react-loadingg";
import 'react-toastify/dist/ReactToastify.css';

const channel = ({ data }) => {
  const baseadd = "https://db336d2d3fd5.ngrok.io";
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const [Subs, setsubs] = useState(false);
  const [loading, isLoading] = useState(false);
  const avFileInput = React.useRef(null);
  const covFileInput = React.useRef(null);
  const [avatar, setavatr] = useState();
  const [avatarpre, setavatrpre] = useState<string>();
  const [cover, setcover] = useState();
  const [coverpre, setcoverpre] = useState<string>();
  const setav = (event) => {
    setavatr(event.target.files[0]);
    setavatrpre(URL.createObjectURL(event.target.files[0]));
  };
  const setcov = (event) => {
    setcover(event.target.files[0]);
    setcoverpre(URL.createObjectURL(event.target.files[0]));
  };
  async function check() {
    const formData = new FormData();
    if (isAuth) {
      formData.append("check", "");
      formData.append("idChannel", data.idChannel);
      formData.append("username", theUser.username);
      axios
        .post(baseadd + "/api/subscribe.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.isIn === "no") {
            setsubs(false);
          } else setsubs(true);
        });
    }
  }
  const subscribe = (event) => {
    if (isAuth) {
      isLoading(true);
      const formData = new FormData();
      formData.append("toggle", "ok");
      formData.append("idChannel", data.idChannel);
      formData.append("username", theUser.username);
      axios
        .post(baseadd + "/api/subscribe.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => setsubs(!Subs));
      isLoading(false);
      check();
    } else toast.error('you need to log in', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  function save() {
    const formData = new FormData();
    formData.append("id", data.channel.idChannel);
    formData.append("username", theUser.username);
    formData.append("cover", cover);
    formData.append("avatar", avatar);

    axios
      .post(baseadd + "/api/settings.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) router.reload();
      });
  }
  const handleClickav = (event) => {
    avFileInput.current.click();
  };
  const handleClickcov = (event) => {
    covFileInput.current.click();
  };

  if (data.channel !== null) {
    return (
      <>

        <Sidebar />

        {avatar || cover ? (
          <div
            onClick={save}
            className="fixed top-20  right-7 z-20 bg-white elevation-2 text-blue-700 cursor-pointer px-3 py-2 "
          >
            save changes
          </div>
        ) : (
          ""
        )}

        <div className="pt-16 md:ml-28 pb-10 xl:ml-80  h-screen w-screen ">
        <ToastContainer />

          {isAuth && theUser.username === data.channel.username && (
            <>
              <input
                type="file"
                name=""
                id=""
                className="hidden"
                onChange={setav}
                ref={avFileInput}
              />
              <input
                type="file"
                name=""
                id=""
                className="hidden"
                onChange={setcov}
                ref={covFileInput}
              />
            </>
          )}

          <div className=" aspect-w-16  relative bg-gray-900 w-full overflow-hidden grid place-items-center banner aspect-h-6 lg:aspect-h-4">
            {isAuth && theUser.username === data.channel.username && (
              <button
                onClick={handleClickcov}
                className="flex px-3 py-2 place-self-start gap-1 items-center cursor-pointer bg-gray-900  z-20 w-20 h-12 rounded m-2 bg-opacity-50 outline-none focus:outline-none text-white "
              >
                <RiImageEditLine fontSize={20} /> cover
              </button>
            )}

            {data.channel.cover || coverpre ? (
              <img
                src={coverpre ? coverpre : data.channel.cover}
                className="w-full h-full "
              />
            ) : (
              ""
            )}

            <div className="z-10 flex items-center justify-center ">
             <div className="grid"> <div className="group h-24 w-24 lg:h-32 lg:w-32   rounded-full relative overflow-hidden shadow-xl bg-white">
              
                 {isAuth && theUser.username === data.channel.username && (
                  <div
                    onClick={handleClickav}
                    className="h-full w-full absolute top-0 right-0 bg-black text-white text-xl cursor-pointer bg-opacity-50 z-20 opacity-0 group-hover:opacity-100 grid place-items-center"
                  >
                    <BsCardImage />
                  </div>
                )}
                <img
                  src={avatarpre ? avatarpre : data.channel.avatar}
                  className="h-full"
                />
              </div>
              <h1 className="chtitle">{data.channel.nameChannel}</h1>
              </div>
              <div className="flex space-x-1">
                <h1 className="chtitle text-xs">
                  {data.channel.vidos} videos{" "}
                </h1>
                <h1 className="chtitle text-xs">
                  {data.channel.subscribers} followers{" "}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex px-4 py-2 items-center justify-between">
<h1>Content</h1>
            
            <div
              onClick={subscribe}
              className="relative  rounded elevation-2 px-3 py-2 bg-red-600  text-white  cursor-pointer "
            >
              {!isAuth ? (
                "follow"
              ) : loading ? (
                <NineCellLoading />
              ) : Subs ? (
                "unfollow"
              ) : (
                "follow"
              )}
            </div>
            </div>
            {!data.videos ? (
              <div className="text-3xl text-gray-600 ">
                <h1>this channel havent dropped any content yet</h1>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 ">
                {data.videos.map((dt) => (
                  <Thumb key={dt.id} data={dt} />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else return <NotFound />;
};

export default channel;
export async function getServerSideProps(context) {
  const id = context.query.c;
  const res = await fetch(
    `https://db336d2d3fd5.ngrok.io/api/channel.php?c=${id}`
  );
  const cInfos = await res.json();

  return {
    props: {
      data: cInfos,
    },
  };
}
