
function CourseCard({data}){
    return(
        <div className="text-white w-[22rem] ml-7 h-[360px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700">
        <div className="overflow-hidden">
                <img 
                    className="h-48 p-2 ml-20 mt-2 rounded-tl-lg "
                    src={data?.thumbnail}
                    alt="course thumbnail"
                    />
                <div className="p-2 space-y-1 text-white">
                    <h3 className="text-xl font-bold text-yellow-500 line-clamp-2">
                        {data?.coursesName}
                    </h3>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Total lectures : </span>
                        {data?.totalLecture}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Instructor : </span>
                        {data?.name}
                    </p>
                    <p className="font-semibold">
                        <span className="text-yellow-500 font-bold">Price : </span>
                        {data?.price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CourseCard