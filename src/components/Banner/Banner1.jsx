import { FaPlayCircle } from "react-icons/fa";
import BannerOneImage from "../../../src/assets/banner1.png";

const Banner1 = () => {
    return (
        <>
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
                        <div>
                            <div className="">
                                <img src={BannerOneImage} alt="" className="min-h-[300px]" />
                            </div>
                        </div>
                        <div className="relative">
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
                                    <div className="before:absolute before:content-[''] before:bg-secondary before:flex before:w-[200px] before:h-[200px] before:-top-80 before:right-0 rounded-full before:-z-50 blur-3xl opacity-50">
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner1