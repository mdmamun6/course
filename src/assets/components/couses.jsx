import { useEffect, useState } from "react";

const Courses = () =>{
    const [course, setCourse] = useState([]);


    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="bg-white  p-3 shadow-lg">
            <h3>Course : {course.length}</h3>
            {
                course.map(course => <Courses course = {course}></Courses>)
            }
        </div>
    )
}
export default Courses;