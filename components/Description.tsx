
import Linkify from 'react-linkify';
import hashtag  from 'react-linkify';

const Description = ( {data}) => {
  var linkifyOptions = 
    {
        formatHref: function (href, type) {
          if (type === 'hashtag') {
            href = '/hashtags' + href.substring(1);
          }
          return href;
        }
      }

  return (
    <Linkify option={linkifyOptions} className="w-full dark:text-gray-300 fontp font-light px-2   py-2 ">
   <pre>
{data}     
     </pre>  
    </Linkify>
  );
};

export default Description;
