import Image from "next/image";

const eachSub = ({ data }) => {
  let user = data.username.split(" ").map((i) => i.charAt(0));

  return (
    <div className="w-full py-1  text-xs italic flex items-center">
      <div className="h-6 mr-2 relative grid place-items-center w-6 overflow-hidden dark:bg-gray-800 dark:text-gray-100 bg-gray-200 rounded-full">
        {data.avtr ? (
          <Image src={data.avtr} layout="fill" />
        ) : (
          user.map((e) => e)
        )}
      </div>
      {data.username}
    </div>
  );
};

export default eachSub;
