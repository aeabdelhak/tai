import { useContext } from "react";
import Sidebar from "../components/sidebar"
import { MyContext } from "../utils/JWTAuth";
import { getServerSideProps } from "./channel copy";
import Items from "../components/Items";

export default function subscriptions() {
    const { rootState, logoutUser } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;
    const [data,setdata]=useState<any>()

const get = async()=>{
    const datas = await axios.get("https://db336d2d3fd5.ngrok.io/subscribtions.php?user="+theUser.username);
    setdata(datas.data)
 
}
console.log(data)
    if (isAuth)
    {
        get()
   
        return (
            <>
                <Sidebar />
                <div className="md:ml-28 pt-16 pb-10 xl:ml-80 flex flex-wrap gap-2">
  {data && data.map((dt) => (
  

  <Items key={dt.id} data={dt} />
))} 
                </div>
            </>
        )
     }
    else
        return (
            <>

                <Sidebar />
                <div className="md:ml-28 pt-16 pb-10 xl:ml-80 grid place-items-center h-screen w-screen">
               
               <div className="space-y-3">
                    <h1 className="text-4xl font-light"> 
                        in oeder to acces to this page
                    </h1>
                    <h1 className="text-2xl font-light">
                        you need to <button className="px-3 py-2 text-blue-600 focus:outline-none">LOG IN</button>
                    </h1>
                   </div>    

                </div>
            </>)
}

import { GetStaticProps } from 'next'
import axios from "axios";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
    const res = await fetch(`https://picsum.photos/v2/list?page=3&limit=20`)
    const data = await res.json()
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { 
       data }, // will be passed to the page component as props
    }
  
  }
