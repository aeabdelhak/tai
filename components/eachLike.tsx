import Image from 'next/image'
import router from 'next/router';

const eachLike = ({data}) => {

  let user = data.username.split(" ").map((i) => i.charAt(0));

    return (
        <div
        onClick={() => router.push("/play?v=" + data.idVideo)}
        className="hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer w-full py-1  text-xs italic grid grid-flow-col place-items-start"
      >
      <div className="h-6 mr-2 relative grid place-items-center w-6 overflow-hidden bg-gray-200 dark:bg-gray-800 dark:text-gray-100 rounded-full">
        {data.avtr ? (
          <Image src={data.avtr} layout="fill" />
        ) : (
          user.map((e) => e)
        )}
          
        </div>
        {data.username} liked the video {data.title}
      </div>    
    );
}

export default eachLike;