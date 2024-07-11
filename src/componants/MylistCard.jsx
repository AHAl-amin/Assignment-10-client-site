import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MylistCard = ({ item, items, setItems }) => {
    const { _id,
        photo, spotName, countryName, location, description, cost, seasonality, travelTime, totalVisitor } = item;


    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`https://travel-alpha-one.vercel.app/mylist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Travel spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = items.filter(itm => itm._id !== _id)
                            setItems(remaining);
                        }
                    })
            }
        });
    }
    return (

        <div className="max-w-6xl mx-auto px-3">
            <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row ">
                <div className="flex-1">
                    <figure><img className="w-full h-[250px]" src={photo} alt="Movie" /></figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title text-3xl mb-3">{spotName}</h2>
                    <div>
                        <p className="flex items-center gap-2"><span className="font-bold">Average Cost :</span>{cost} <FaBangladeshiTakaSign /></p>

                       

                        <p><span className="font-bold">
                            Travel Time :</span>{travelTime}</p>
                        <p><span className="font-bold">
                        Seasonality:</span>{seasonality}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/updatepage/${_id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 btn-primary">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MylistCard;