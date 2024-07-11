import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { Typewriter } from "react-simple-typewriter";








const AllTourist = () => {



    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);


    const handleSorting = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'Highest Average cost') {
            const data = [...spots].sort((p1,p2) =>{
                if(p1.cost < p2.cost) return 1;
                if(p1.cost > p2.cost) return -1;
                return 0;
            })
            console.log(data)
            setSpots(data)
        }
        else if(e.target.value === 'Lowest Average cost') {
            const data2 = [...spots].sort((p1,p2) =>{
                if(p1.cost < p2.cost) return -1;
                if(p1.cost > p2.cost) return 1;
                return 0;
            })
            console.log(data2)
            setSpots(data2)
        }
    }
    return (

        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>LoveToTravel/AllTourist</title>
            </Helmet>
            <h2 className="text-4xl text-center font-bold mt-5 " > <Typewriter
                            words={['All tourists spot']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /> </h2>

            <div className="text-center my-4 ">

                <select onChange={handleSorting} name='countryName' className="select select-bordered bg-green-300">
                    <option disabled selected>Sort by</option>
                    <option >Highest Average cost</option>
                    <option >Lowest Average cost</option>



                </select>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
                {
                    spots.map(spot => <SpotCard key={spot._id}
                        spots={spots}
                        setSpots={setSpots}
                        spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTourist;