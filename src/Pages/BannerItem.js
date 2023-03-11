import React from 'react';
import './Banner.css';

import img1 from "../assets/images/banner/1.jpg";

const BannerItem = ({slide}) => {
    const {image,id,prev,next} = slide;
    return (

            <div id={`slide${id}`} className="carousel-item relative w-full">

                <div className="carousel-img">
                    <img src={image} className="w-full rounded-xl" />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                    <h1 className="lg:text-6xl md:text-5xl lg:text-6xl sm:text-2xl font-bold text-white">
                        Affordable <br/>
                        Price for Car <br/>
                        Serviceing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform  -translate-y-1/2 w-2/5 left-5 top-1/2">
                    <h1 className="text-sm lg:text-xl xs:text-xs md:text-lg sm:text-ls font-bold text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.

                    </h1>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-5 top-3/4">
                    <button className="btn btn-outline btn-warning mr-5">Learn More</button>
                    <button className="btn btn-outline btn-error">Order Now</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>

    );
};

export default BannerItem;