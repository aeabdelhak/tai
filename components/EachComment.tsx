import Image from 'next/image'

const EachComment = ({comment}) => {
  return (
    <div className=" my-2 bg-white shadow-md">
      <div className="flex space-x-2 items-center w-full p-2 ">
       <div className="w-8 h-8 relative grid place-items-center overflow-hidden rounded-full bg-gray-200">

 <Image src={"http://ff2c283ec086.ngrok.io/api/"+comment.avatar} layout="fill"/>   
       </div>

        <div className="w-full">
          <div className="flex justify-between w-full">
          <h1 className="text-xs font-semibold text-gray-900">{comment.username} </h1>
          <h1 className="text-xs text-gray-500">{comment.when} </h1>

          </div>
          <h1 className="pl-2 text-sm py-1">{comment.comment} 
          
          </h1>
        </div> 
      </div>
    </div>
  );
};

export default EachComment;
