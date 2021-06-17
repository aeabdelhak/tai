const Loading = () => {
    return (
        <div className="h-screen z-50 w-screen bg-white flex  fixed top-0  text-gray-700">
            <div className="relative h-screen  w-screen" >
            <div className="h-10 w-10 rounded-full border-b-2 border-red-600 animate-spin transition duration-75 absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 transorm"></div>
            </div>

        </div>
    );
}

export default Loading;