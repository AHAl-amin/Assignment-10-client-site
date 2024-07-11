import { useLoaderData } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

import { IoLocationOutline } from "react-icons/io5";

const ViewDettails = () => {
    const spot = useLoaderData();
    const { _id,
        name, email, photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor } = spot;

    return (





        <div className="hero min-h-screen  max-w-6xl mx-auto">
            <div className="hero-content flex-col gap-6 lg:flex-row">
                <div className="flex-1">
                    <img src={photo} className=" rounded-lg shadow-2xl" />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-500">{countryName}</h1>
                    <h1 className="text-2xl md:text-4xl font-bold">{spotName}</h1>

                    <p className="py-6">{description}</p>
                    <div className="space-y-3">
                        <p className="flex items-center gap-2"><span className="font-bold">Average Cost :</span>{cost} <FaBangladeshiTakaSign /></p>

                        <p><span className="font-bold">Total visitor per year :</span>{totalVisitor}</p>

                        <p><span className="font-bold">
                            Travel Time :</span>{travelTime}</p>

                        <p><span className="font-bold">Seationality:</span>{seasonality}</p>

                        <p className="flex items-center gap-2"><span className="font-bold">
                        <IoLocationOutline />  </span>{location}</p>

                    </div>


                </div>
            </div>
        </div>



    );
};

export default ViewDettails;