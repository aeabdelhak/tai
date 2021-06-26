
import Linkify from 'react-linkify';

const Description = ( {data}) => {
  return (
    <Linkify className="w-full font-light px-2   py-2 ">
   <p>
{data}     
     </p>  
    </Linkify>
  );
};

export default Description;
