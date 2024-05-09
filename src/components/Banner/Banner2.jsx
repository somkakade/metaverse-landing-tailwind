import { FaPlayCircle } from "react-icons/fa";
import Banner2Image from "../../../src/assets/banner2.png";

const Banner2 = () => {
    return (
        <>
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="z-50">
                                <div>
                                    <div>
                                        <h2 className="text-4xl">GET READY TO ENJ0Y VR <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Movies WITH OUR PLATFORM</span></h2>
                                        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam repellat consequatur aperiam dolorem, rerum temporibus consequuntur voluptatum suscipit deleniti, quisquam omnis sapiente eaque modi eos animi eius recusandae quod.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="inline-block bg-gradient-to-r from-primary to-secondary rounded-full py-2 px-5 text-white">Get Started</button>
                                        <button className="flex items-center gap-2"><FaPlayCircle /> See Demo</button>
                                    </div>
                                    <div className="before:absolute before:content-[''] before:bg-secondary before:flex before:w-[200px] before:h-[200px] before:-top-20 before:right-0 rounded-full before:-z-50 blur-3xl opacity-50">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div>
                                <img src={Banner2Image} alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner2