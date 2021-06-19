const EachComment = ({comment}) => {
  console.log(comment) 
  return (
    <div className=" my-2">
      <div className="flex space-x-2 items-center w-full p-2 ">
       <div className="w-8 h-8 relative overflow-hidden rounded-full bg-gray-200">

  <img src={comment.avatar} alt="" />       
       </div>

        <div>
          
          <h1 className="text-xs text-gray-500">{comment.name}</h1>
          <h1 className="text-sm">{comment.message}</h1>
        </div> 
      </div>
    </div>
  );
};

export default EachComment;
