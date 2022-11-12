import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(9)


    const pages = Math.ceil(count / size)

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data?.services)
                setCount(data?.count)
            })
    }, [page, size])
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
                    {
                        [...Array(pages).keys()].map(nb => <button className="btn" key={nb-1} onClick={()=> setPage(nb)}>{nb + 1}</button>)
                    }
                </div>
                <select name="" onChange={e => setSize(e.target.value)} className='ml-5 focus:outline-none' id="">
                    <option value="6">6</option>
                    <option selected={9} value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    );
};

export default Service;