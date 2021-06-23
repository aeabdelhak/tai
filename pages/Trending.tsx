
import Content from '../components/Content'
import React, {useState} from "react"
import SearchBar from '../components/SearchBar'
import Sidebar from '../components/sidebar'
import Items from '../components/Items'
 function Trending({data}) {
console.log(data)
  return (
    <div className="grid pt-16">   
    <Sidebar/>  
    <div className="flex flex-wrap">


{data.map((dt)=>(
 
   

  
 <Items key={dt.idVideo} data={dt} />

 ))}

</div>
         
    </div>




  )
}


export const getStaticProps = async (ctx) => {


  const res = await fetch(`https://db336d2d3fd5.ngrok.io/api/trending.php`)
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
