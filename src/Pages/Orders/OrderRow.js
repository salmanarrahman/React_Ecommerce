import React, {useEffect, useState} from 'react';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
    const {_id,service,serviceName,customer,phone,price,email,status} = order
    const [orderService,setOrderService] = useState({})

/*    useEffect(()=>{
        fetch(`http://localhost:5000/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    },[service])*/



    return (


            <tr>
                <th>
                    <label>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-ghost"> X </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">

                                {
                                    orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                                }


                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>$ {price}</td>
                <th>
                    <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
                </th>
            </tr>


    );
};

export default OrderRow;