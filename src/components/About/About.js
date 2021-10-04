import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="d-flex background">
            <div className="img-fluid w-50 p-4 m-2">
                <img className="w-100" src="https://thumbs.dreamstime.com/b/time-to-study-school-tools-around-blackboard-background-46060556.jpg" alt="" />
            </div>
            <div className="w-50 p-4 m-2 mt-5">
                <h2>We are Future of Education</h2>
                <p>You are definitely intrigued to discover who we are. We are Scrate Education – future of education. We have the best knowledge base for you study. Whether you are a prospective student.</p>
            </div>
        </div>
    );
};

export default About;