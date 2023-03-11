import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../Context/AuthProvider";
import login from "../Login/Login";
import OrderRow from "./OrderRow";

const Orders = () => {

    const {user,loading} = useContext(AuthContext);
    const [order,setOrder] = useState([])


   /* if (!loading){
       fetch(`http://localhost:5000/order?email=${user?.email}`).then(res => res.json())
            .then(data => {
                setOrder(data);
            })

    }
*/

    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`,{
            method:'DELETE'
        }).then(res => res.json).then(data => {
            const remaining = order.filter(ord => ord._id !== id)
            setOrder(remaining)
        })
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/order/${id}`,{
            method:'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'Approved'})
        }).then(res => res.json).then(data => {
            console.log(data)
            const remaining = order.filter(odr => odr._id !== id);
            const approving = order.find(odr => odr._id === id);
            approving.status = 'Approved'

            const newOrders = [approving, ...remaining];
            setOrder(newOrders);
        })
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user?.email}`).then(res => res.json())
            .then(data => {
                setOrder(data);
            })
    },[user?.email])

    return (
        <div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>

                    {
                        order.map(order => <OrderRow handleStatusUpdate={handleStatusUpdate} handleDelete={handleDelete} key={order._id} order={order}></OrderRow>)
                    }


                    </tbody>

                </table>
            </div>









        </div>
    );
};

export default Orders;