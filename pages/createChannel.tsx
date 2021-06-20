import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCallback, useContext, useEffect } from "react";
import Loading from "../components/loading";
import { MyContext } from "../utils/JWTAuth";
import { WaveTopBottomLoading } from 'react-loadingg';

const createChannel = () => {
  const router = useRouter();
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const [isCreating, setcre] = useState(false);
  const [name, setName] = useState("");
  const [desc, setdesc] = useState("");
    const namwset = (event) => setName(event.target.value);
    const descset = (event) => setdesc(event.target.value);
  if (isAuth) {

  
    const create = (event) => {
      setcre(true);
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("username", theUser.username);
      axios.post("http://ff2c283ec086.ngrok.io/api/channel.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res=>{console.log(res);
        if(res.data.success) router.push("/channel/?c="+res.data.idChannel) });
      setcre(false);
    };
    return (
      <div className="pt-16  h-screen w-screen overflow-hidden">
    {isCreating &&
<div className="grid place-items-center h-full w-full fixed top-0 bg-white bg-opacity-30 backdrop-blur-md ">       

       <WaveTopBottomLoading/>

     </div>
    } 

        <div className="">
          <div className="h-96 relative bg-gray-600 w-full overflow-hidden grid place-items-center">
            <Image
              src="https://picsum.photos/1920/1080"
              layout="fill"
              className="z-0 "
            />
            <div className=" grid place-items-center z-10 ">
              <div className="h-32 w-32 rounded-full relative overflow-hidden shadow-xl z-0 bg-white">
                <Image src="https://picsum.photos/200/200" layout="fill" />
              </div>
              <h1 className="chtitle">{name}</h1>
            </div>
          </div>{" "}
        </div>

        <div className=" relative grid  mx-auto  p-3 w-full max-w-xl text-center ">
          <form action="" method="post"
                onSubmit={create}
                >
            <div className=" py-3 text-left w-full">
              <h1 className="text-xs">channel Name: </h1>
              <input
                type="text"
                placeholder="name"
                className="input bg-gray-100"
                onChange={namwset}
              />
            </div>
            <div className=" py-3 text-left w-full">
              <h1 className="text-xs"> description: </h1>
              <textarea
                placeholder="description"
                rows={6}
                className="input bg-gray-100"
                onChange={descset}
              ></textarea>
              <button
                onSubmit={create} onClick={create}
                className="p-2 px-3 bg-blue-200 text-blue-600 rounded-sm"
              >
                create now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen">
      <div className=" bg-gray-300 h-full w-full items-center flex justify-center space-x-2">
        <div className="space-y-4">
          <h1 className="text-6xl">log in first</h1>
          <button
            className="p-2 px-3 bg-red-700 text-white uppercase "
            onClick={() => router.push("/Login")}
          >
            login{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default createChannel;
