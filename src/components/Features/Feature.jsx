import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const Feature = () => {
    return (
        <section className='py-16'>
            <div className="container ">
                <div className='pb-14'>
                    <h2 className='text-3xl sm:text-4xl font-semibold text-center'>Why Choose Us</h2>
                </div>
                {/* Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
                    {/* Card No 1 */}
                    <div className='bg-[#111111] text-white text-center  rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-500 p-10 hover:'>
                        <div className='flex justify-center'>
                            <FaCameraRetro className='text-5xl text-primary' />
                        </div>
                        <div>
                            <h3 className='text-2xl pt-6'>Captivating Videos</h3>
                            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non!</p>
                        </div>
                        <div>
                            <a href="#" className='text-primary text-lg font-semibold inline-block group-hover:text-black'>Read More</a>
                        </div>
                    </div>
                    {/* Card No 2 */}
                    <div className='bg-[#111111] text-white text-center  rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-500 p-10'>
                        <div className='flex justify-center'>
                            <GiNotebook className='text-5xl text-primary'/>
                        </div>
                        <div>
                            <h3 className='text-2xl pt-6'>Safe Transactions</h3>
                            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non!</p>
                        </div>
                        <div>
                            <a href="#" className='text-primary text-lg font-semibold inline-block group-hover:text-black'>Read More</a>
                        </div>
                    </div>
                    {/* Card No 3 */}
                    <div className='bg-[#111111] text-white text-center  rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:text-black duration-500 p-10'>
                        <div className='flex justify-center'>
                            <SlNote className='text-5xl text-primary' />
                        </div>
                        <div>
                            <h3 className='text-2xl pt-6'>Experience Reality</h3>
                            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non!</p>
                        </div>
                        <div>
                            <a href="#" className='text-primary text-lg font-semibold inline-block group-hover:text-black'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature