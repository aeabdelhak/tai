const DashItem = ({number,what}) => {
    return (
        <div className="h-36 select-none text-white bg-gradient-to-r from-green-400 to-blue-500  grid place-items-center rounded-lg">
        <div>
          <h1 className="text-6xl text-center">{number}</h1>
          <h1 className="text-1xl">new {what} </h1>
          <h1 className="text-xs text-right">last mounth </h1>
        </div>
      </div>
    );
}

export default DashItem;