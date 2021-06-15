import "../styles/globals.css";
import Sidebar from "../components/sidebar";
import Router from "next/router";
import Loading from "../components/loading";
import { CookiesProvider } from "react-cookie"
import MyContextProvider  from '../utils/JWTAuth';
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import Notifications from "../components/notification"
import { useState } from "react";
function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  const [active, setActive] = useState(false);
  const [notShow, setNotShow] = useState(false);



  return (
    <MyContextProvider>
      {loading && <Loading />}
      
      <div className="flex w-screen z-0">
        <Sidebar />
        <Navbar active={active} setActive={setActive} notshow={notShow} setnotshow={setNotShow}/>
        <Profile active={active} setActive={setActive} />
        <Notifications notshow={notShow} setnotshow={setNotShow}/>
        <Component {...pageProps} />
      </div>
      </MyContextProvider>
  );
}


export default MyApp;
