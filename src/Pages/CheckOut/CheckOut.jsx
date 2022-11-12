import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData()
    const user = useContext(AuthContext)
    // const {user} = useContext(AudioContext)
    console.log(user)
    
    const handelOrderProduct = e => {
        e.preventDefault()
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const phone = e.target.phone.value
        const massage = e.target.massage.value
        const fullName = firstName + ' ' + lastName;

        const order = {
            service :data?._id,
            serviceName : data?.title,
            product_photo : data?.img,
            price : data?.price,
            customer: fullName,
            email,
            phone,
            massage
        }
        // fetch('services')
        fetch('http://localhost:5000/orders', {
            method : 'POST', 
            headers : {'content-type' :  'application/json'},
            body : JSON.stringify(order) 
         })
         .then(res => res.json())
         .then(data => {
            if(data.acknowledged) {
                alert('Order complied');
                e.form.reset()
            }
            })
         .catch(er => console.log(er))
        // if( phone.length == 11){}
    } 
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className='bg_hover w-full'>
                <div className="rounded-lg bg-cover bg-position-center bg-no-repeat mx-auto mb-20  bg-[url('https://i.ibb.co/GkGDysr/checkout.png')]">
                    <p className='text-5xl p-24 text-white' >Check Out</p>
                </div>
            </div>
            <form onSubmit={handelOrderProduct}>
                <div className="bg-gray-100 min-h-screen md:px-20 pt-6">
                    <div className="rounded-md p-10 max-w-5xl mx-auto">
                        <div className="space-y-4 ">
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <input required type="text" placeholder="First Name " name="firstName" className="ml-2 w-full outline-none p-4 text-md border-2 rounded-md"/>
                                </div>
                                <div className='w-1/2'>
                                    <input type="text" placeholder="Last Name " name="lastName" className="ml-2 w-full outline-none py-4 px-3 text-md border-2 rounded-md" />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='w-1/2'>
                                    <input type="text" placeholder="Number" name="phone" className="ml-2 w-full outline-none  p-4 text-md border-2 rounded-md" required/>
                                </div>
                                <div className='w-1/2'>
                                    <input type="email" placeholder="Email " name='email' className="ml-2 w-full outline-none p-4 text-md border-2 rounded-md" required/>
                                </div>
                            </div>
                            <div>
                                <textarea name='massage' cols="30" rows="10" placeholder="Your Massage.." className="w-full font-serif  p-5 text-gray-600 outline-none rounded-md"></textarea>
                            </div>
                            <button type='submit' className=" px-6 py-4 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 w-full ">Order Confirm</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;