import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";



const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto my-8">
           
            <h2 className='text-2xl lg:text-5xl font-bold text-center '>  <Typewriter
                            words={['Travel Blogs']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /> </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-10 mx-2'>

                <div className="card bg-base-100 shadow-xl " >
                    <figure>
                    <Fade direction="left">

                        <img className="h-[250px] w-full" src="https://i.ibb.co/wrNq7PF/empty-chair-beach-74190-1630.jpg" alt="Shoes" />
                    </Fade>

                    </figure>
                    <div className="card-body" >
                        <h2 className="card-title">  Bangladesh
                        </h2>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                            
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" >
                    <figure>
                    <Fade direction="down">

                        <img className="h-[250px] w-full" src="https://i.ibb.co/wBV52XH/bali-pagoda-indonesia-1150-11021.jpg" alt="Shoes" />
                    </Fade>
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title"> Indonesia</h2>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl" >
                    <figure>
                    <Fade direction="right">

                        <img className="h-[250px] w-full" src="https://i.ibb.co/2sd1gQP/beautiful-architecture-building-exterior-kuala-lumpur-city-malaysia-74190-9952.jpg" alt="Shoes" />
                        </Fade>
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">	Malaysia</h2>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" >
                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/drWxdf9/tourist-boat-ban-rak-thai-village-mae-hong-son-province-335224-1166.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> 	Vietnam</h2>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" >
                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/YypyV65/phimai-historical-park-43976-19.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Cambodia </h2>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl"  >
                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/QdrrCtx/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand-335224-779.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> thailand</h2>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Blog;