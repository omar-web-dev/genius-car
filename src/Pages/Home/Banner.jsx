import React from 'react';
import BannerItems from './BannerItems';
// 
// 
// 
// 
// 

const Banner = () => {
    const BannerData = [
        {
            img : "https://i.ibb.co/7tk3q6J/1.jpg",
            pre : 6,
            id : 1,
            next : 2
        },
        {
            img : "https://i.ibb.co/yQRDHWf/2.jpg",
            pre : 1,
            id : 2,
            next : 3
        },
        {
            
            img : "https://i.ibb.co/jgp6j8G/3.jpg",
            pre : 2,
            id : 3,
            next : 4
        },
        {
            img : "https://i.ibb.co/vD7yqBX/4.jpg",
            pre : 3,
            id : 4,
            next : 5
        },
        {
            img : "https://i.ibb.co/zQKDgqX/5.jpg",
            pre : 4,
            id : 5,
            next : 6
        },
        {
            img : "https://i.ibb.co/18BPvqv/6.jpg",
            pre : 5,
            id : 6,
            next : 1
        }
    ]
    return (
        <div className="carousel w-full ">
            {BannerData.map(slider => <BannerItems key={slider.id} slider={slider}/>)}
        </div>
    );
};

export default Banner;