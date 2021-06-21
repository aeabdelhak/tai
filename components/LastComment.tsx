import EachComment from "./EachComment"

const LastComment = ({data}) => {
    return (
        <div className="h-96 col-span-2 p-2 bg-white elevation-2  overflow-hidden  rounded-lg">
            <h1 >last comments:</h1>
            <hr/>
            <div
            className="h-full overflow-y-auto pb-4 scrollbar-thin scrollbar-track-gray-300">
                {data.map((e)=>(
            <EachComment key={e.id} comment={e}/>


))}
           
       
            
            </div>
        </div>
    );
}

export default LastComment;