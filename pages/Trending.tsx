
import Content from '../components/Content'
import React, {useState} from "react"
import SearchBar from '../components/SearchBar'
import Sidebar from '../components/sidebar'
import Items from '../components/Items'
import FadeIn from 'react-fade-in';

 function Trending({data}) {

  return (
    <div className=" dark:bg-gray-900 h-screen w-screen scrollbar-thumb-gray-500 scrollbar-thin dark:text-gray-100 grid pt-16">   
    <Sidebar/>  
    <div className="md:ml-28 pb-10 xl:ml-80">
    <div className="flex  flex-wrap">

<FadeIn className="flex flex-wrap">
{data.now.map((dt)=>(
 
   

  
 <Items key={dt.idVideo} data={dt} />

 ))}
</FadeIn>
</div>
</div>     
    </div>




  )
}


export async function getServerSideProps(ctx) {


  const res = await fetch(`http://localhost/api/trending.php`)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
  
}






export default Trending
