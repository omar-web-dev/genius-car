import React from 'react';

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="flex mt-28 items-center">
                <figure className='w-1/2 pr-[3%]'>
                    <div className='relative'>
                        <img src={'https://i.ibb.co/J3jzrh0/person.jpg'} className='pr-16 pb-20' alt="Album" />
                        <img src={'https://i.ibb.co/jvW3F4R/parts.jpg'} className='rounded-xl absolute bottom-0 bg-white pt-5 pl-5 w-2/3 right-0' alt="Album" />
                    </div>
                </figure>
                <div className=" w-1/2">
                    <p className='text-red-500'>About Us</p>
                    <h2 className="text-5xl pt-5 pb-7 font-semibold">We are qualified <br /> & of experience <br /> in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=' pt-5 pb-7 '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="">
                        <button className="btn btn-error">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 