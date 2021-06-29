import { useContext } from "react";
import Sidebar from "../components/sidebar";
import { MyContext } from "../utils/JWTAuth";
import Items from "../components/Items";
import FadeIn from "react-fade-in";
import WaitPage from "../components/wait";
export default function subscriptions() {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser, showLogin } = rootState;
  const [data, setdata] = useState<any>();
  const [wait, setwait] = useState(true);

  const get = async () => {
    const datas = await axios.get(
      "http://localhost/api/subscribtions.php?user=" + theUser.username
    );
    setdata(datas.data);
  };
  useEffect(() => {
    setwait(true);
    setTimeout(() => {
      setwait(false);
    }, 2000);
  }, [isAuth]);
  useEffect(() => {
    if (isAuth) get();
  }, [isAuth]);
  if (isAuth) {
    return (
      <>
        <Sidebar />

        <div className="dark:text-gray-100 dark:bg-gray-900  w-screen h-screen scrollbar-thumb-gray-500 scrollbar-thin md:ml-28 pt-16 pb-10 xl:ml-80 flex flex-wrap gap-2">
          <FadeIn className="flex flex-wrap">
            {data && data.map((dt) => <Items key={dt.id} data={dt} />)}
          </FadeIn>
        </div>
      </>
    );
  } else
    return (
      <>
        <Sidebar />
        {wait && <WaitPage />}

        <div className="md:ml-28 dark:text-gray-100 dark:bg-gray-900   pt-16 pb-10 xl:ml-80 grid place-items-center h-screen w-screen">
          <div className="space-y-3">
            <h1 className="text-4xl font-light">
              in oeder to acces to this page
            </h1>
            <h1 className="text-2xl font-light">
              you need to{" "}
              <button
                onClick={() => router.push("/Login")}
                className="px-3 py-2 text-blue-600 focus:outline-none"
              >
                LOG IN
              </button>
            </h1>
          </div>
        </div>
      </>
    );
}

import { GetStaticProps } from "next";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import router from "next/router";


