import router from "next/router";
import Items from "../components/thumbSearch";
import Sidebar from "../components/sidebar";

export default function search(result) {
  console.log(result);
  return (
    <>
    <Sidebar/>
      <div className="md:ml-28 pt-16 pb-10 xl:ml-80 grid">
        {result.result ?
          result.result.map((e) => (
            <div className="w-full p-2 gap-2">
              {e.channel ? (
                <div onClick={()=>{router.push("/channelvue?c="+e.idChannel)}} className="w-full cursor-pointer gap-2 rounded bg-white elevation-2 p-2 flex justify-start items-center">
                  <div className="h-20 w-20 relative rounded-full overflow-hidden  elevation-2">
                    <img src={e.avatar} alt="" className="h-full" />
                  </div>
                  <div>
                    <h1>{e.nameChannel}</h1>
                    <p className="italic text-xs">{e.description}</p>
                  </div>
                </div>
              ) : (
                <Items data={e} />

              )}
            </div>
          )):
          <h1 className="font-light text-2xl italic">
              no results found 
          </h1>
          }
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const search = ctx.query.s;
  const req1 = await fetch("http://localhost/api/search.php?s=" + search);
  const result = await req1.json();

  return {
    props: {
      result,
    },
  };
}