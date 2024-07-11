import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


import Blog from './Blog';
import Contact from "./Contact";
// import CountryCard from './CountryCard';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import HomeSpotCard from "./HomeSpotCard";
import { Typewriter } from "react-simple-typewriter";




const Home = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);
    return (
       <div>
        <Helmet>
                <title>
                LoveToTravel/home
                </title>
            </Helmet>
         <div className="max-w-6xl mx-auto">
            
            <Banner></Banner>
            {/* <Countries></Countries> */}
           <div>
            <h2 className="text-4xl text-center font-bold mt-5"><Typewriter
                            words={['Tourist Spot']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /> </h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
                {
                    spots.map(spot => <HomeSpotCard key={spot._id}
                        spots={spots}
                        setSpots={setSpots}
                        spot={spot}></HomeSpotCard>)
                }
            </div>
           </div>
            <Blog></Blog>
            <Contact></Contact>
          
           
        </div>
       </div>
    );
};

export default Home;