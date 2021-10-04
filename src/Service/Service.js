import React, { useEffect, useState } from 'react';
import Course from './Course/Course';
import './Service.css';

const Service = () => {
    const [courses,setCourse]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res =>res.json())
        .then(data =>setCourse(data));
    },[])
    return (
    <div className="body-color">
     <h2 className="mt-2">Our Courses</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        
      
            {
                courses.map(course=><Course
                course={course}
                key={course.id}
                >

                </Course>)
            }
        </div>
    </div>
    );
};

export default Service;