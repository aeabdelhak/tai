import { WaveTopBottomLoading } from 'react-loadingg';


const Loading = () => {
    return (
        <div className="h-screen z-50 w-screen dark:bg-gray-900 bg-white grid place-items-start fixed top-0  text-gray-700">
       <WaveTopBottomLoading/>


        </div>
    );
}

export default Loading;