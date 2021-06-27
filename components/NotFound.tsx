const NotFound = () => {
    return (
        <div className="h-screen dark:bg-gray-900 w-screen grid place-items-center">
          <div>
          <h1 className="text-7xl dark:text-red-400 text-red-600 font-light">ops!</h1>
            <h1 className="text-4xl font-light ">
                the page you are requisting is not available 
            </h1>
          </div>
        </div>
    );
}

export default NotFound;