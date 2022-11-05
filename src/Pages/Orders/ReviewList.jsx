import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

const ReviewList = ({ order, handelDelete }) => {
    const { serviceName, product_photo, _id, price, email, customer } = order
   
    return (
        <div className="p-4 my-5 rounded-lg border shadow-md sm:p-8 ">
            <div className="pt-3 pb-0 sm:pt-4 flex justify-between">
                <div className='flex gap-5 items-center w-[530px]'>
                    <button onClick={() => handelDelete(_id)} className=' rounded-full'>
                        <FaRegTimesCircle className='w-10 text-gray-50 hover:text-red-500 bg-gray-900 hover:bg-none rounded-full h-10'/>
                    </button>
                    <img className="w-40 rounded-lg" alt='kannakati off' src={product_photo} />
                    <div >
                        <p className='text-2xl font-semibold  '>{serviceName}</p>
                        <p className='text-gray-400 text-lg'>Color : Green </p>
                        <p className='text-gray-400 text-lg' >Size: S</p>
                    </div>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    $2367
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    22-10-2022
                </div>
                <div className='inline-flex items-center'>
                    <button className="text-xl font-semibold text-gray-100 bg-red-500 px-5 py-3 rounded-lg">padding</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;