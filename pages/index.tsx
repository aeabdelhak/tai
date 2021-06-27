import {GetStaticProps} from 'next';
import Content from '../components/Content'
import React, {useContext} from 'react'

import Sidebar from '../components/sidebar';
export default function Home({data}) {
  
      return(
        <div className="grid pt-16 w-screen h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 dark:bg-gray-900 dark:text-gray-100">   
        <Sidebar/>  
       <Content data={data} />
             
        </div>

        
      
      )

  





}













export async function getServerSideProps(ctx) {

 



  const res = await fetch(`http://localhost/api/home.php`)
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


