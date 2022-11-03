import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mx-auto mt-32 mb-12' >
                <p className='text-orange-500'>Services</p>
                <h2 className='text-5xl py-5'> Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:p-0 gap-5'>
                {services.map(sr => <ServiceCard service={sr} key={sr._id} />)}
            </div>
            <div className='flex justify-center'>
                <div className="btn-group mt-5">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn btn-disabled font-bold">...</button>
                    <button className="btn">4</button>
                    <button className="btn">5</button>
                </div>
                {/* <button className="btn btn-outline btn-error mt-3 text-white">More Services</button> */}
            </div>
        </div>
    );
};

export default Service;