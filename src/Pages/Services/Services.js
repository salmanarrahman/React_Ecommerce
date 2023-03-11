import React, {useEffect, useState} from 'react';
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services,setServices] = useState([]);
    useEffect( () =>{
        fetch("http://localhost:5000/service")
            .then(res =>res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="py-10">

          <div className="text-center mb-4">
              <p className="text-2xl font-semibold text-orange-600">About Us</p>
              <p className="text-5xl font-semibold text-black-600">Our Service Area</p>
              <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium commodi dolorem eligendi, facere,
                  illo itaque mollitia natus nemo obcaecati officia quam quia,
                 </p>

          </div>

            <div className="grid gap-6 my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    >
                    </ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;