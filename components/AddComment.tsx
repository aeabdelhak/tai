import { AnnotationIcon } from "@heroicons/react/outline";

const AddComment = () => {
  return (
    <div className="bg-white shadow text-right">
      <div className="flex space-x-2 items-center w-full p-2 ">
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <input
          type="text"
          className="p-2 w-full rounded-lg border-gray-300 border  "
          placeholder="add comment"
        />
      </div>
      <button className="p-2 flex items-center space-x-2 w-full justify-center bg-gray-300">
        <h1>add Comment</h1>
        <AnnotationIcon className="w-5" />
      </button>
    </div>
  );
};

export default AddComment;
