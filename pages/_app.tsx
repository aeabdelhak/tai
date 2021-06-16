import "../styles/globals.css";

import Loading from "../components/loading";
import MyContextProvider  from '../utils/JWTAuth';
import Router from "next/router";
import { useState } from "react";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });



  return (
    <MyContextProvider>
      {loading && <Loading />}
      <Layout/>
      <div className="flex w-screen z-0">

        <Component {...pageProps} />
      </div>
      </MyContextProvider>
  );
}


export default MyApp;
