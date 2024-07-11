import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qYdY3fv/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-p.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <p className="text-2xl text-orange-600 font-bold lg:text-5xl lg:font-extrabold ">  <Typewriter
                            words={['Love to travel']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></p>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zF8fxKc/as-globetrotting-traveler-ventured-remote-exotic-location-their-excitement-grew-antic-1032785-2800.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-2xl font-bold lg:text-5xl text-white lg:font-extrabold "
                        ><Typewriter
                        words={['Love to travel']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8D7gpkn/geiranger-fjord-beautiful-nature-norway-panorama-nature-photographer-tourist-with-camera-shoots-5642.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-2xl text-white font-bold lg:text-5xl lg:font-extrabold "><Typewriter
                            words={['Love to travel']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></p>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/WkN4DJM/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand-33522.jpg" style={{ width: "100%", height: "100vh" }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <p className="text-2xl font-bold lg:text-5xl text-green-200 lg:font-extrabold "
                        ><Typewriter
                        words={['Love to travel']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;