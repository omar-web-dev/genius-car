import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FiCornerUpLeft } from "react-icons/fi";
import { AuthContext } from '../../Context/AuthProvider';
import ReviewList from './ReviewList';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handelDelete = (id) => {
        const confirm = window.confirm('Are you sure delete this item')
        if (confirm) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.deletedCount > 0) {
                        const reaming = orders.filter(odr => odr._id !== id)
                        setOrders(reaming)
                    }
                })
        }
    }

    const handelStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    const reaming = orders.filter(odr => odr._id !== id)
                    const approved = orders.find(odr => odr._id === id)
                    approved.status = 'Approved'
                    const newOrders = [...reaming, approved]
                    setOrders(newOrders)
                }
            })
    }

    // if (user?.email) {
    //     fetch(`http://localhost:5000/orders?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // } 
    return (
        <div className='max-w-[1440px] mx-auto mb-24'>
            {/* {user.emailVerified == false ?
                <p className='text-4xl'>Hey {user?.displayName ? user?.displayName : 'User'} please validation your mail</p> : ''
            } */}
            {orders.length === 0 ? <p className='text-5xl text-center mb-5'>No Fount Your Orders</p>
                :
                <div>
                    <p className='text-5xl text-center mb-5'>Your Order items {orders.length}</p>
                    <div>
                        <div className='bg_hover w-full'>
                            <div className="rounded-lg bg-cover bg-position-center bg-no-repeat mb-20  bg-[url('https://i.ibb.co/GkGDysr/checkout.png')]">
                                <p className='text-5xl p-24 text-white' >Order Review</p>
                            </div>
                        </div>
                        <div>
                            {orders.map(order => <ReviewList
                                order={order}
                                orders={orders}
                                key={order?._id}
                                handelDelete={handelDelete}
                                handelStatusUpdate={handelStatusUpdate}

                            />)}
                        </div >
                        <div className='flex justify-between'>
                            <button className="flex items-center border-indigo-300 border p-3 rounded-md">
                                <FiCornerUpLeft className='w-7 h-7 mr-3' />
                                <span className='text-xl'>Continue Shopping</span>
                            </button>
                            <button className="flex items-center border-error border p-3 rounded-md">
                                <FaTrashAlt className='w-7 h-7 mr-2' />
                                <span className='text-xl'>Clear Shopping Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
};

export default Orders;

