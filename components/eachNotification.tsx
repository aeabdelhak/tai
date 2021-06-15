const EachNotification = ({channelName}) => {
    return (
        <div className="w-full py-1  text-sm flex items-center">
            <div className="h-10 mr-2 w-10 bg-gray-200 rounded-full">
                {/* image */}
            </div>
            {channelName} has droped a new video
        </div>
    );
}

export default EachNotification;