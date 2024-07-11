import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from './../providers/AuthProvider';
import MylistCard from "./MylistCard";
import { Typewriter } from "react-simple-typewriter";


const MyList = () => {

    const {user} = useContext(AuthContext) || {};
    const [items ,setItems] = useState([])
    
    // console.log('suooooo', user)

    useEffect(() =>{
        fetch(`https://travel-alpha-one.vercel.app/mylist/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setItems(data)
        })
    },[user]);

    return (


        <div className="max-w-6xl mx-auto">
             <Helmet>
                <title>LoveToTravel/myList</title>
            </Helmet>
            <h2 className="text-center mt-3 text-4xl font-bold"><Typewriter
                            words={['My spot list']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
                {
                    items.map(item => <MylistCard key={item._id} item={item} items={items} setItems={setItems}></MylistCard>)
                }
            </div>
        </div>
    );
};

export default MyList;