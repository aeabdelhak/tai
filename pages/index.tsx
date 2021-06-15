import {GetStaticProps} from 'next';
import Content from '../components/Content'
import React, {useContext} from 'react'

export default function Home({data}) {
 

  
      return(
        <>     
           <Content data={data} />
             
        </>

        
      
      )

  





}













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


