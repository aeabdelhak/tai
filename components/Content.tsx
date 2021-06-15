import Categories from "./Categories"
import Items from "./Items"

const Content = ({data}) => {

    return (
        <div className="pt-16 md:ml-28 pb-10 xl:ml-80 grid">
      <Categories data={data} />
      <Categories data={data} />
      <Categories data={data} />
      <Categories data={data} />
      <Categories data={data} />
      <Categories data={data} />
   
        </div>
    );
}

export default Content;