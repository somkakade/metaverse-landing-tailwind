import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='bg-gray-100 py-16 mt-16'>
            <div className="container">
                <div className='flex flex-col sm:flex-row'>
                    <div className='w-full md:w-1/3'>
                        <div>
                            <div>
                                <h2 className='text-3xl md:text-4xl text-black font-semibold pb-4'>Metaverse</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi odit, odio velit dolor perspiciatis incidunt quos ipsam quibusdam quasi beatae mollitia eaque accusantium.</p>
                            </div>
                            <div className='py-4'>
                                <p className='flex items-center gap-4'><FaLocationArrow className='text-md' /> Sangli, Maharashtra</p>
                                <p className='flex items-center gap-4'><FaMobileAlt className='text-md' />+91-76200733686</p>
                            </div>
                            <div className='flex gap-4 text-3xl'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 pt-10 sm:pt-0'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-20">
                            {/* Card No 1 */}
                            <div>
                                <h3 className='text-xl md:text-2xl font-semibold text-black pb-4'>Quick Links</h3>
                                <div>
                                    <ul>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Home</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>About</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Contact</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Card No 2 */}
                            <div>
                                <h3 className='text-xl md:text-2xl font-semibold text-black pb-4'>Quick Links</h3>
                                <div>
                                    <ul>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Home</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>About</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Contact</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Card No 3 */}
                            <div>
                                <h3 className='text-xl md:text-2xl font-semibold text-black pb-4'>Location</h3>
                                <div>
                                    <ul>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Home</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>About</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Contact</a></li>
                                        <li className='hover:translate-x-1 duration-500 pb-5'><a href="#" className='hover:text-primary'>Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer