import router from "next/router";

const EachNotification = ({ data }) => {
  if (data) {
    let dat = data.username || data.name;
    let user = dat.split(" ").map((i) => i.charAt(0));

    if (data.cmt)
      return (
        <div
          onClick={() => router.push("/play?v=" + data.idVideo)}
          className="hover:bg-gray-100 cursor-pointer w-full py-1  text-xs italic flex items-center"
        >
          <div className="h-6 mr-2 w-6 overflow-hidden bg-gray-200 rounded-full">
            <img src={data.avatar} width={60} height={60} className="h-full" />
          </div>
          {data.username} commented to your video
        </div>
      );
    else
      return (
        <div
          onClick={() => router.push("/play?v=" + data.idVideo)}
          className="hover:bg-gray-100 cursor-pointer w-full py-1  text-xs italic flex items-center"
        >
          <div className="h-6 mr-2 w-6 bg-gray-200 overflow-hidden rounded-full grid place-items-center">
            {data.avatar ? (
              <img
                src={data.avatar}
                alt=""
                width={60}
                height={60}
                className="h-full"
              />
            ) : (
              user.map((e) => e)
            )}
          </div>
          {data.name} uploaded new video
        </div>
      );
  }
};
export default EachNotification;
