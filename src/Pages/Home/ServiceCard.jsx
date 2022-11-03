import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const {img, title, price} = service
    return (
        <div>
            <div className=" p-6 rounded-md shadow-md">
                <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                <div className='flex justify-between text-orange-600' >
                    <p>price: ${price}</p>
                    <p><FaArrowRight/></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;