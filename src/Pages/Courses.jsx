import HomeLayout from '../Layout/HomeLayout';
import { courseCard } from '../Constant/CourseCard';
import CourseCard from '../Components/CourseCard';
function Courses(){

    return(
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore the courses made by
                    <span className="font-bold text-yellow-500">
                        Industry experts
                    </span>
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {courseCard?.map((element) => {
                        return <CourseCard key={element.id} data={element} />
                    })}
                </div>

            </div>
        </HomeLayout>
    );

}

export default Courses;