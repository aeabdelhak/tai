import ChannelSidebar from "../components/channelSidebar";

const settings = ({ data }) => {
  return (
    <>
      <ChannelSidebar data={data} />
      <div className="pt-16  md:ml-28 pb-10 xl:ml-80 w-screen h-screen   ">
        <div className="p-20 max-w-7xl">
          <div className="flex w-full items-center">
            <div className="flex w-full items-center space-x-2">
              <h1 className="italic text-sm">id: </h1>
              <h1> {data.idChannel}</h1>
            </div>
            <div className="flex w-full items-center space-x-2">
              <h1 className="italic text-sm">name: </h1>
              <h1> {data.nameChannel}</h1>
            </div>
          </div>
          <div className="rounded-lg bg-white elevation-3 p-2 my-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex  items-center space-x-2">
                <h1 className="italic font-light">
                  Do you want to change the name of your channel?
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-blue-600 hover:bg-blue-200 focus:outline-none">
                  <h1> change</h1>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white elevation-3 p-2 my-2 w-full">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="italic font-light">
                  Do you want to delete your channel?
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-red-600 hover:bg-red-200 focus:outline-none">
                  <h1> delete</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default settings;
export async function getServerSideProps(context) {
  const id = context.query.c;
  const res = await fetch(
    `http://ff2c283ec086.ngrok.io/api/Dashboard.php?c=${id}`
  );
  const infos = await res.json();

  return {
    props: {
      data: infos,
      id: id,
    },
  };
}
