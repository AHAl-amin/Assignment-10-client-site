import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";






const AddTourist = () => {
    const{user} =useContext(AuthContext)


    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitor = form.totalVisitor.value;
        const photo = form.photo.value;
        const newSpot = { name, email, photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor }
        console.log(newSpot)


        // send data to the server
        fetch('https://travel-alpha-one.vercel.app/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'user Added Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }


    return (
        <div>
            <Helmet>
                <title>LoveToTravel/AddTourist</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">

                <div className="bg-green-400 rounded-lg p-4 my-8">
                    <h2 className="text-4xl text-center font-bold my-4">
                    <Typewriter
                            words={['Add tourists Spot']}
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
                                    <span className="label-text">	User Name</span>

                                </div>
                                <input type="text" name='name' placeholder="	User Name" className="input input-bordered w-full " required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Email</span>

                                </div>
                                <input type="email" name='email' defaultValue={user?.email} placeholder="email"  className="input input-bordered w-full "disabled
                                    required />

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Spot Name</span>

                                </div>
                                <input type="text" name='spotName' placeholder="Spot name" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Country name</span>

                                </div>
                                {/* <input type="text" name='countryName' placeholder="country name" className="input input-bordered w-full "
                            required /> */}
                                <select name='countryName' className="select select-bordered w-full ">
                                    <option disabled selected>selected your country</option>
                                    <option value='Bangladesh'>Bangladesh</option>
                                    <option value='Thailand'>Thailand</option>
                                    <option value='Malaysia'>Malaysia</option>



                                    <option value='Vietnam'>Vietnam</option>
                                    <option value='Cambodia'>Cambodia</option>
                                    <option value='Indonesia'>Indonesia</option>
                                  
                                </select>


                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Location</span>

                                </div>
                                <input type="text" name='location' placeholder="location" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Short  description</span>

                                </div>
                                <input type="text" name='description' placeholder="description" className="input input-bordered w-full "
                                    required />


                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Average cost</span>

                                </div>
                                <input type="text" name='cost' placeholder="Average cost " className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Seasonality</span>

                                </div>
                                <input type="text" name='seasonality' placeholder="seasonality " className="input input-bordered w-full "
                                    required />

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Travel time</span>

                                </div>
                                <input type="text" name='travelTime' placeholder="travel time" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">total visitor per year</span>

                                </div>
                                <input type="text" name='totalVisitor' placeholder=" total visitor per year" className="input input-bordered w-full "
                                    required />

                            </label>



                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photos URL</span>

                                </div>
                                <input type="text" name='photo' placeholder=" photo URL" className="input input-bordered w-full "
                                    required />

                            </label>
                            <label className="form-control w-full ">

                                <input className="input input-bordered w-full bg-gray-400 my-10" type="submit" value="Submit" />

                            </label>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};


export default AddTourist;