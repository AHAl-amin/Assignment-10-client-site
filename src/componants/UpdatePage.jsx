import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";


const UpdatePage = () => {
   

    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
     
        
        const spotName = form.spotName.value;
       
      
  
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
      
        const photo = form.photo.value;

        const newSpot = { name, email, photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor }
        console.log(newSpot)


        // send data to the server
        fetch(`https://travel-alpha-one.vercel.app/spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    const spot = useLoaderData();
    const { _id, name, email, photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor } = spot;

    return (
        <div>
             <div>
            <Helmet>
                <title>LoveToTravel/Update page</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

                <div className="bg-orange-100 rounded-lg p-4 my-8">
                    <h2 className="text-4xl text-center font-bold my-4">
                    <Typewriter
                            words={['Update form']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /> </h2>
                    <form onSubmit={handleAddSpot} className=" p-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                       
                          

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Spot Name</span>

                                </div>
                                <input type="text" name='spotName' defaultValue={spotName} placeholder="Spot name" className="input input-bordered w-full "
                                    required />

                            </label>
                         

                            

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Average cost</span>

                                </div>
                                <input type="text" name='cost' defaultValue={cost} placeholder="Average cost " className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Seasonality</span>

                                </div>
                                <input type="text" name='seasonality' defaultValue={seasonality} placeholder="seasonality " className="input input-bordered w-full "
                                    required />

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Travel time</span>

                                </div>
                                <input type="text" name='travelTime' defaultValue={travelTime} placeholder="travel time" className="input input-bordered w-full "
                                    required />

                            </label>
                        


                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo URL</span>

                                </div>
                                <input type="text" name='photo' defaultValue={photo} placeholder=" photo URL" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">

                                <input className="input input-bordered w-full bg-gray-400 my-10" type="submit" value="Update" />

                            </label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdatePage;