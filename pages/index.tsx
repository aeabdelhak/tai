import {GetStaticProps} from 'next';
import Content from '../components/Content'
import React, {useContext} from 'react'
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/sidebar';
export default function Home({data}) {
  
      return(
        <div className="grid pt-16">   
        <Sidebar/>  
       <Content data={data} />
             
        </div>

        
      
      )

  





}













export const getStaticProps:GetStaticProps = async () => {

 



  const res = await fetch(`https://db336d2d3fd5.ngrok.io/api/home.php`)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
     data:data }, // will be passed to the page component as props
  }

}


