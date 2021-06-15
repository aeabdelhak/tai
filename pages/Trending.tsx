
import Content from '../components/Content'
import React, {useState} from "react"

 function Trending({data}) {

  return (

<Content data={data} />




  )
}


export const getStaticProps = async (ctx) => {


  const res = await fetch(`https://picsum.photos/v2/list?page=6&limit=20`)
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
