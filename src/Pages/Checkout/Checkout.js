import React, {useContext} from 'react';
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../Context/AuthProvider";

const Checkout = () => {

    const {_id,title,price} = useLoaderData()
    const {user} = useContext(AuthContext)

    const handleForm = (event) =>{

        event.preventDefault();
        const form = event.target
        const name = `${form.firstname.value} ${form.lastname.value}`
        const email = user?.email || 'unregister';
        const message = form.message.value;
        const phone = form.phone.value;

        const order = {
            service : _id,
            serviceName : title,price,
            customer: name,
            email,
            phone,
            message
        }
        //validation required
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res=> res.json())
            .then(data =>  {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .then(er => console.log(er))

    }

    return (
        <div>

            <form onSubmit={handleForm}>

                <h2 className="text-4xl">{title}</h2>
                <h4 className="text-3xl">price: {price} </h4>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <input name="firstname"  type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" required/>
                  <input name="lastname" type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" required/>
                  <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" required/>
                  <input name="mail" type="text" placeholder="Your mail" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly={true}/>

              </div>

               <div className="py-10">
                   <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                  <br/> <input className="btn" type="submit" value="Place Your Order"/>
               </div>

            </form>

        </div>
    );
};

export default Checkout;