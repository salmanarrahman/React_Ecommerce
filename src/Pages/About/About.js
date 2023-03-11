import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'


const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row ">
                <div className= "relative w-1/2 py-6 ">

                    <img src={parts} className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={person} className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />


                </div>
                <div className="w-1/2">
                    <p className=" text-2xl font-semibold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">We are Qualified <br/>
                                                        and of experience <br/>
                                                        of this field
                    </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;