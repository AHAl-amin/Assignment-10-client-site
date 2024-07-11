
import { Link } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";



const SpotCard = ({spot}) => {

   
        const { _id, name, email, photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor } = spot;
       
    return (
  

    <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="h-[250px] w-full" src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold mb-3">{spotName}</h2>
                        <div className="space-y-3">
                        <p className="flex items-center gap-2"><span className="font-bold">Average Cost :</span>{cost} <FaBangladeshiTakaSign /></p>
                      
                        <p><span className="font-bold">Total visitor per year :</span>{totalVisitor}</p>
                      
                        <p><span className="font-bold">
                        Travel Time :</span>{travelTime}</p>
                      
                        <p><span className="font-bold">Seationality:</span>{seasonality}</p>
                     
                    </div>
                      
                        <div className="card-actions justify-end">
                            <Link to={`/viewDettail/${_id}`}>
                                <button
                                    className="btn btn-primary">	View Details </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default SpotCard;