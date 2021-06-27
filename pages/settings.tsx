import axios from "axios";
import { useRouter } from 'next/router'
import { StickyBallLoading } from 'react-loadingg';
import { useState } from "react";
import ChannelSidebar from "../components/channelSidebar";
import { MyContext } from "../utils/JWTAuth";
import React, { useCallback, useContext } from "react";
import NotFound from "../components/NotFound";
const settings = ({ data }) => {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState; 





  const [del, showdel] = useState(false);
  const [active, setactive] = useState(true);

  const router = useRouter()
  const [name, setname] = useState<string>()
  const [Loading, setLoading] = useState<boolean>(false)
  const [cancel, setcancel] = useState<boolean>(false)
  const [editname, seteditname] = useState<boolean>(false)
  const newname = (e) => { setname(e.target.value) }
  const nameSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const formdata = new FormData()
    formdata.append("id", data.idChannel)
    formdata.append("newname", name)
    axios.post("http://localhost/api/settings.php", formdata)
      .then(res => {
        if (res.data.success)
        setTimeout(() => {
          
          setLoading(false)
          router.reload() 
        }, 500);
       
        
     })
  }
axios.get("http://localhost/api/settings.php?id="+data.idChannel)
.then(resu=>{
  console.log(resu)
  if (resu.data===true)
  setactive(true)
  else
  setactive(false)

})
const avtivation=()=>{
  const formdata=new FormData
    formdata.append("id",data.idChannel)
    formdata.append("activation","")
    axios.post("http://localhost/api/settings.php", formdata)
    setactive(!active)

}

  const delshow=()=>{showdel(true)}
  const showedit=()=>seteditname(true)
  const deletec=()=>{
    const formdata=new FormData
    formdata.append("id",data.idChannel)
    formdata.append("deletec","")
    axios.post("http://localhost/api/settings.php", formdata)
    .then(res => {
      if (res.data.success)
      setTimeout(() => {
        
        setLoading(false)
        router.push("/") 
      }, 500);
     
      
   })
  }
const hide=()=>{
  setcancel(false)
  seteditname(false)
  showdel(false)
}
if(data){
if(!isAuth ||theUser.username!==data.username )return <NotFound/>
else
  return (
    <>
      <ChannelSidebar data={data} />
      {del &&    <div className="grid place-items-center bg-black bg-opacity-5 fixed h-screen w-screen duration-500 ease-out   top-0 z-30 right-0 overflow-x-auto ">
     
     <div className="max-w-lg w-full p-2 rounded-lg dark:bg-gray-900 bg-white elevation-2 space-y-4 ">
        <h1>delete this channel!</h1>

       <div className="flex w-full justify-evenly gap-2">
         <button onClick={deletec} className="bg-white dark:bg-gray-900 px-3 py-2 elevation-2 w-full text-green-500">yes</button>
         <button  onClick={hide} className="bg-white  dark:bg-gray-900 px-3 py-2 elevation-2 w-full text-red-500">cancel</button>
       </div>
     </div>
     </div>}
      {editname &&
      <div className="h-screen w-screen fixed overflow-auto grid place-items-center bg-white bg-opacity-30 z-20 ">
       {Loading && <div className="absolute h-full w-full z-10 dark:bg-gray-900 bg-white ">
          <StickyBallLoading />

        </div>
       } 
        <div className="p-2 dark:bg-gray-900 bg-white shadow elevation-2 max-w-md w-full rounded-lg space-y-2 relative">
          <div className="flex justify-between items-center">
            <h1>change the name</h1>
            <button onClick={hide} className="px-3 py-2 focus:outline-none  dark:text-red-400 text-red-600 ">Cancel</button>
          </div>
          <form action="" onSubmit={nameSubmit} >

            <input type="text" defaultValue={data.nameChannel} className="w-full rounded-lg focus:outline-none border-gray-300 focus:ring-0 "
              onChange={newname} />
            <div className="flex justify-end w-full">
              <button onClick={nameSubmit} className="px-3 py-2 focus:outline-none dark:text-green-400 text-green-600 ">save</button>

            </div>
          </form>

        </div>

      </div>
      }
      <div className="pt-16 dark:bg-gray-900 dark:text-gray-100  md:ml-28 pb-10 xl:ml-80 w-screen h-screen   ">

        <div className="p-20 max-w-7xl">
          <div className="lg:flex  w-full items-center">
            <div className="flex w-full items-center space-x-2">
              <h1 className="italic text-sm">id: </h1>
              <h1> {data.idChannel}</h1>
            </div>
            <div className="flex w-full items-center space-x-2">
              <h1 className="italic text-sm">name: </h1>
              <h1> {data.nameChannel}</h1>
            </div>
          </div>
          <div className=" dark:bg-gray-800 dark:text-gray-100 rounded-lg bg-white elevation-3 p-2 my-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex  items-center space-x-2">
                <h1 className="italic font-light">
                  Do you want to change the name of your channel?
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={showedit} className="px-3 py-2 dark:text-blue-400 text-blue-600 hover:bg-blue-200 focus:outline-none">
                  <h1> change</h1>
                </button>
              </div>
            </div>
          </div>
          <div className=" dark:bg-gray-800 dark:text-gray-100 rounded-lg bg-white elevation-3 p-2 my-2 w-full">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="italic font-light">
                  Do you want to delete your channel?
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={delshow} className="px-3 py-2 dark:text-red-400 text-red-600 hover:bg-red-200 focus:outline-none">
                  <h1> delete</h1>
                </button>
              </div>
            </div>
          </div>
          <div className=" dark:bg-gray-800 dark:text-gray-100 rounded-lg bg-white elevation-3 p-2 my-2 w-full">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="italic font-light">
                  active/desactive your channel?
                </h1>
              </div>
              <div className="flex items-center space-x-2">
          {active ?<button onClick={avtivation} className="px-3 py-2 dark:text-red-400 text-red-600 hover:bg-red-200 focus:outline-none">
                  <h1> desactivate</h1>
                </button> :
                <button onClick={avtivation} className="px-3 py-2 text-green-600 hover:bg-green-200 focus:outline-none">
                <h1> activate</h1>
              </button>

          }      
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
else return <NotFound/>

}

;

export default settings;
export async function getServerSideProps(context) {
  const id = context.query.c;
  const res = await fetch(
    `http://localhost/api/Dashboard.php?c=${id}`
  );
  const infos = await res.json();

  return {
    props: {
      data: infos,
      id: id,
    },
  };
}
