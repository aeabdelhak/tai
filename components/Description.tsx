import { useState } from "react";
import Linkify from "react-linkify";
import hashtag from "react-linkify";

const Description = ({ data }) => {
  const [smore, setmore] = useState<boolean>(false);
  var linkifyOptions = {
    formatHref: function (href, type) {
      if (type === "hashtag") {
        href = "/hashtags" + href.substring(1);
      }
      return href;
    },
  };

  return (
    <Linkify
      option={linkifyOptions}
      className=" dark:text-gray-100 fontp font-light px-2   py-2 "
    >
      <pre
        className={
          smore
            ? "dark:text-gray-100 duration-500 transition-all ease-in-out overflow-hidden "
            : "dark:text-gray-100 max-h-52 overflow-hidden duration-500 transition-all ease-in-out "
        }
      >
        {data}
      </pre>
      {smore  ? (
        <h1
          onClick={() => setmore(false)}
          className="w-full dark:text-gray-200 hover:underline text-center cursor-pointer"
        >
          see less
        </h1>
      ) : (

        <h1
          onClick={() => setmore(true)}
          className="w-full dark:text-gray-200 hover:underline text-center cursor-pointer"
        >
          see all
        </h1>
      )}
    </Linkify>
  );
};

export default Description;
