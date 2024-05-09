import { FaPlayCircle } from "react-icons/fa"
import HerroBanner from "../../../src/assets/hero.png";


const Hero = () => {
    return (
        <section className="hero py-12">
            <div className="container min-h-[400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center relative">
                    {/* Content */}
                    <div className="order-2 md:order-1">
                        <div>
                            <h1 className="font-semibold text-3xl md:text-4xl">GET READY TO ENJ0Y VR <span className="block text-secondary">GAMES WITH OUR PLATFORM</span></h1>
                            <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum officiis dolore magnam iste aut exercitationem amet ad, vitae vel eum? Quas, minima ex. Deleniti, itaque provident cum veniam sunt impedit.</p>
                        </div>
                        {/*  */}
                        <div>
                            <div className="flex items-center gap-4">
                                <button className="inline-block bg-gradient-to-r from-primary to-secondary rounded-full py-2 px-5 text-white">Get Started</button>
                                <button className="flex items-center gap-2"><FaPlayCircle /> See Demo</button>
                            </div>
                        </div>
                    </div>
                    {/* img */}
                    <div className="order-1 md:order-2 pb-4 md:pb-0 before:absolute before:w-[300px] before:h-[300px] before:bg-secondary before:-z-50 before:-top-10 before:right-50 before:rounded-full before:blur-3xl">
                        <img src={HerroBanner} alt="" className="min-h-[200px] " />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero