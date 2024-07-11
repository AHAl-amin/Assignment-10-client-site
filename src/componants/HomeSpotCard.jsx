import React from 'react';
import { Link } from 'react-router-dom';

const HomeSpotCard = ({spot}) => {
    const {_id,
        name, email, photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor} = spot;
    return (
        <div>
           
               <div className="card bg-base-100 shadow-xl">
        <figure><img className="h-[250px] w-full" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold mb-3">{spotName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
           <Link to={`viewDettail/${_id}`}>
           <button 
             className="btn btn-primary">	View Details </button>
           </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HomeSpotCard;