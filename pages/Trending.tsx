
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
    <div className="md:ml-28 pb-10 xl:ml-80">
    <div className="flex  flex-wrap">


{data.map((dt)=>(
 
   

  
 <Items key={dt.idVideo} data={dt} />

 ))}

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
