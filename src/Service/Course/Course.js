import React from 'react';
import './Course.css';

const Course = (props) => {
    const { name, img } = props.course;
    return (

        <div className="col">
            <div className="card shadow  mb-5 bg-body rounded hover-card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                </div>
            </div>


        </div>

    );
};

export default Course;