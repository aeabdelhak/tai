import Items from "./Items";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
const Categories = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
 
    
    <>
      <h1 className="uppercase font-semibold p-2 z-0">{data.category}</h1>
      <Carousel responsive={responsive}>


   {data.videos.map((dt)=>(
    
      

     
    <Items key={dt.idVideo} data={dt} />
   
    ))}
   
</Carousel>
    </>
  );
};

export default Categories;
