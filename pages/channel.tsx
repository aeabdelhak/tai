import { GetStaticProps } from "next";
import Image from "next/image";
import Categories from "../components/Categories"

const channel = ({data}) => {
    return (
        <div className="pt-16 md:ml-28 pb-10 xl:ml-80  h-screen w-screen overflow-hidden">
            <div className="h-96 relative bg-gray-700 w-full overflow-hidden grid place-items-center">
          <Image  src="https://picsum.photos/1920/1080" layout="fill" className="z-0 absolute" />
        <div className="z-10 grid place-items-center ">
               <div className="h-32 w-32 rounded-full relative overflow-hidden shadow-xl bg-white">
               <Image  src="https://picsum.photos/200/200" layout="fill" />
          </div>
              <h1 className="chtitle">chnanel name</h1>
             <div className="flex space-x-1">
                 <h1 className="chtitle text-xs" >120 videos </h1>
                 <h1 className="chtitle text-xs" >1m subscribers </h1>
                 
                 </div> 
        </div>
       

            </div>
      <Categories data={data} />

        </div>
    );
}

export default channel;
export const getStaticProps:GetStaticProps = async () => {
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