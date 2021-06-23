import Categories from "./Categories"
import Items from "./Items"

const Content = ({data}) => {
    return (
        <div className="md:ml-28 pb-10 xl:ml-80 grid">
 {data.map((dt) => ( 
  <Categories data={dt.category} />  
   
   
 ))}  

    
  
   
        </div>
    );
}

export default Content;