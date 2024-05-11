
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "../../../src/assets/logo.png";
import { MdDarkMode } from "react-icons/md";


const Header = () => {
    return (
        <>
            <header>
                <nav className="bg-white shadow-md">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <div>
                                {/* Logo */}
                                <div className="flex items-center gap-3">
                                    <a href="#" className="flex items-center gap-3">
                                        <div>
                                            <img src={Logo} alt="" className="w-20" />
                                        </div>
                                        <div>
                                            <p className="text-2xl md:text-3xl capitalize">vr <span className="font-bold text-black">world</span></p>
                                        </div>
                                    </a>
                                </div>
                                {/* Desktop Menu */}

                            </div>
                            <div>
                                {/* Desktop Navbar */}
                                <div className="">
                                    <ul className="capitalize items-center gap-8 text-xl font-semibold hidden md:flex">
                                        <li><a href="#" className="hover:text-primary hover:border-b-2 hover:border-secondary transaction-color duration-500">home</a></li>
                                        <li><a href="#" className="hover:text-primary hover:border-b-2 hover:border-secondary transaction-color duration-500">products</a></li>
                                        <li><a href="#" className="hover:text-primary hover:border-b-2 hover:border-secondary transaction-color duration-500">pricing</a></li>
                                        <li><a href="#" className="hover:text-primary hover:border-b-2 hover:border-secondary transaction-color duration-500">contact</a></li>
                                        <li><a href="#"><MdDarkMode className="text-2xl" /></a></li>
                                    </ul>
                                </div>
                                {/* Mobile Navbar */}
                                <div className="block md:hidden">
                                    <div>
                                        <div className="toggle">
                                            <FaBarsStaggered className="text-xl" />
                                        </div>
                                        <div className="relative mobile-menu">
                                            <ul className="capitalize items-center gap-8 text-xl font-semibold block md:hidden bg-black text-white absolute top-6 right-[120px] p-6 text-center z-50">
                                                <li className="pb-5"><a href="#" className="hover:text-primary">home</a></li>
                                                <li className="pb-5"><a href="#" className="hover:text-primary">products</a></li>
                                                <li className="pb-5"><a href="#" className="hover:text-primary">pricing</a></li>
                                                <li className="pb-5"><a href="#" className="hover:text-primary">contact</a></li>
                                                <li className="pb-5"><a href="#"><MdDarkMode className="text-2xl" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
           
        </>
    )
}

export default Header