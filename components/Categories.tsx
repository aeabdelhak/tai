import Items from "./Items";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2500 },
      items: 8,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1800 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1800, min: 640 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
 
    
    <>
      <h1 className="uppercase p-2 z-0">Category</h1>

      <Carousel
        responsive={responsive}
className="z-0"

      >
        {data.map((dt) => (
  

          <Items key={dt.id} data={dt} />
        ))}
      </Carousel>
    </>
  );
};

export default Categories;
