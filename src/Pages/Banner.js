import React from 'react';
import img1 from '../assets/images/banner/1.jpg';
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import './Banner.css';
import BannerItem from "./BannerItem";

const bannerData = [
    {
        image: img1,
        prev:3,
        id:1,
        next:2

    },
    {
        image: img2,
        prev:1,
        id:2,
        next:3

    },
    {
        image: img3,
        prev:2,
        id:3,
        next:1

    }
]

const Banner = () => {
    return (
        <>

            <div className="carousel w-full py-5">

                {
                    bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                    ></BannerItem>)
                }


            </div>
            
        </>
    );
};

export default Banner;