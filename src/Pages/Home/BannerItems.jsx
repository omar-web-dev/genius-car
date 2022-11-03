import React from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const BannerItems = ({ slider }) => {
    const { img, pre, next, id } = slider
    return (
        <div id={`slider${id}`} className="carousel-item relative w-full">
            <div className='carousel-image' >
                <img alt={`slider_${id}`} src={img} className="object-cover w-screen rounded-lg h-screen " />
            </div>
            <div className="absolute  text-white transform -translate-y-1/2 top-1/2 left-24">
                <h2 className='text-6xl font-bold mb-8'>
                    Affordable <br /> Price For Car <br /> Servicing
                </h2>
                <p className='w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='pt-7'>
                    <button className="btn btn-error mr-2">Discover More</button>
                    <button className="btn btn-outline btn-primary text-white">Latest Project</button>
                </div>
            </div>
            <div className="absolute flex  transform -translate-y-1/2 right-5 bottom-5">
                <a href={`#slider${pre}`} className="btn btn-circle border-0 hover:bg-gray-600 bg-gray-500 mr-2 text-white "><HiArrowLeft /></a>
                <a href={`#slider${next}`} className="btn btn-circle border-0 hover:bg-red-700 bg-red-600 mr-2 text-white "><HiArrowRight /></a>
            </div>

        </div>
    );
};

export default BannerItems;