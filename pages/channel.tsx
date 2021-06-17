import { GetStaticProps } from "next";
import Image from "next/image";
import Categories from "../components/Categories";

const channel = ({ data }) => {
    console.log(data);
  if(data.channel!==null)
  return (
    <div className="pt-16 md:ml-28 pb-10 xl:ml-80  h-screen w-screen overflow-hidden">
      <div className="h-96 relative bg-gray-700 w-full overflow-hidden grid place-items-center">
        <Image
          src="https://picsum.photos/1920/1080"
          layout="fill"
          className="z-0 absolute"
        />
        <div className="z-10 grid place-items-center ">
          <div className="h-32 w-32 rounded-full relative overflow-hidden shadow-xl bg-white">
            <Image src="https://picsum.photos/200/200" layout="fill" />
          </div>
          <h1 className="chtitle">{data.channel.nameChannel}</h1>
          <div className="flex space-x-1">
            <h1 className="chtitle text-xs">120 videos </h1>
            <h1 className="chtitle text-xs">1m subscribers </h1>
          </div>
        </div>
      </div>
      <div>
          {!data.video  ?
          <div className="text-3xl text-gray-600 ">
              <h1>this channel havent dropped any content yet</h1>

          </div>
          :
          ""
          }
      </div>
    </div>
  );
  else
  return (
      <div className="h-screen w-screen grid place-items-center  text-7xl">
          the page your looking for does not exist !
      </div>
  )
};

export default channel;
export async function getServerSideProps(context) {
  const id = context.query.c;
  const res = await fetch(
    `https://aeabdelhak.herokuapp.com/channel.php?c=${id}`
  );
  const cInfos = await res.json();

  console.log(cInfos);
  return {
    props: {
      data: cInfos,
    },
  };
}
