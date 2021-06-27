import Image from 'next/image'

const EachComment = ({comment}) => {
  let user=comment.username.split(' ').map(i => i.charAt(0))

  return (
    <div className=" my-1 ">
      <div className="flex space-x-2 items-center w-full p-2 ">
       <div className="w-8 h-8 relative grid place-items-center overflow-hidden rounded-full dark:bg-gray-600   bg-gray-200">
{comment.avatar ?
 <Image src={comment.avatar} layout="fill"/>   
:
user.map((e)=>e)
}
       </div>

        <div className="w-full">
          <div className="flex justify-between w-full">
          <h1 className="text-xs font-semibold dark:text-gray-200 text-gray-900">{comment.username} </h1>
          <h1 className="text-xs font-thin  dark:text-gray-200 text-gray-600">{comment.when} </h1>

          </div>
          <h1 className="pl-2 text-xs py-1">{comment.comment} 
          
          </h1>
        </div> 
      </div>
    </div>
  );
};

export default EachComment;
