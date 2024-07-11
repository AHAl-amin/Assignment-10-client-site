
import { FaPhone } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";


const Contact = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center"><Typewriter
                            words={['Contact us']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h2>

            <div className="max-w-6xl mx-auto my-10">
                <div className="hero min-h-screen max-w-6xl mx-auto my-10" style={{ backgroundImage: 'url(https://i.ibb.co/vY2w1Pc/creative-icon-set-titles-mobile-app-designs-925962-41793.jpg)' }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="p-10">
                            <h1 className="mb-5 text-5xl font-bold">Hello Traveller</h1>
                            <p className="mb-5 text-green-400 text-2xl">Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration.Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration</p>
                            <div>
                                <p className="flex items-center gap-2 text-3xl justify-center my-8"><FaPhone /> +098 5674 063</p>
                            </div>
                            <button className="btn btn-primary text-xl">Contact</button>
                        </div>
                    </div>
                </div>

                <hr />


            </div>
        </div>
    );
};

export default Contact;