const Course = (course) =>{

    const {img, title, description, price, credit} = course;
    
    return (
        <div className="bg-white  p-3 shadow-lg">
            <img src="{img}" alt="" />
            <h2 className="font-semibold text-3xl">{title}</h2>
            <p>{description}</p>
            <div className="flex justify-between">
                <p>{price} USD</p>
                <p>{credit} hr</p>
            </div>
        </div>
    )
}
export default Course;