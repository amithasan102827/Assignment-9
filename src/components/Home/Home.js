import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            {/* main header */}
            <div className='ui inverted vertical masthead center aligned segment'>
                <div className='hero-text'>
                    <h5>Welcome To Smart Education</h5>
                    <h1 >You Can Learn Anything</h1>
                    <div class='ui huge primary button'>
                        Get Started <i class='right arrow icon'></i>
                    </div>
                </div>
            </div>

             {/* course card */}
            <div className="background-color-1">
                <h1 className="mt-2">Our Courses</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4  mb-2 ms-2 me-2">
                    <div class="col ">
                        <div className="card shadow  mb-5 bg-body rounded">
                            <img src="https://thumbs.dreamstime.com/b/molecule-illustration-over-blue-background-life-biology-medicine-scientific-molecular-research-dna-d-84720668.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Biology course</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow  mb-5 bg-body rounded">
                            <img src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__480.jpg" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Math course</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow  mb-5 bg-body rounded">
                            <img src="https://blog.hubspot.com/hubfs/Google%20Drive%20Integration/How%20to%20Start%20Coding%20The%20Ultimate%20Guide%20for%20Beginner%20Programmers.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Programming course</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow  mb-5 bg-body rounded">
                            <img src="https://www.greeka.com/photos/crete/chania/history/gallery/history-1-480.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">History course</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
              {/* course application */}
            <div className="background-image-2">
                <div className="hero-text">
                    <h4>Applications are Now Open</h4>
                    <p>We’re now taking enrolments for Semester 1 — 2021. Scrate education graduates are 40% more likely to find ongoing work in their chosen profession.</p>
                    <button className="btn btn-primary btn-sm">GET STARTED</button>
                </div>
            </div>

        {/* our professional teachers */}
            <div className="mb-4">
                <h3 className="mt-2">Our Professional Teachers</h3>
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                    
                            <div className="col">
                                <div className="card">
                                    <img src="https://img.freepik.com/free-photo/senior-male-professor-holding-notebook-standing-against-blackboard_23-2148200961.jpg?size=626&ext=jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Samuel Williams</h5>
                                            <small className="text-success">Professor of Enaglish</small>
                                           
                                        </div>
    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <img src="https://media.gettyimages.com/photos/intelligent-matur-female-math-professor-in-classroom-picture-id638917964?s=612x612" className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">Karren Johnson</h5>
                                                <small className="text-success">Professor of Mathematics</small>
                                               
                                            </div>
    </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src="https://blog.prepscholar.com/hs-fs/hubfs/body_professor_laptop.jpg?width=501&name=body_professor_laptop.jpg" className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Jack Mason</h5>
                                                    <small className="text-success">Professor of Physics</small>
                                                  
                                                </div>
    </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
            

</>
                        );
};

                        export default Home;