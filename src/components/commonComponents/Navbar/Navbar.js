import React, { useState } from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [user] = useState(true);
    return (
        <div>
            <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold">CENTURY HOMES</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Home</a>
                            </li>
                            <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Category</a>
                            </li>
                            <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Contact</a>
                            </li>
                            <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Blog</a>
                            </li>
                            <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Dashboard</a>
                            </li>
                            {
                                user ? 
                                <>
                                <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Log Out</a>
                                </li>
                                <a href='/' className=" hover:text-blue-600">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='h-12 w-12 rounded-full' alt="" />
                                </a>
                                </>
                            : 
                            <li className=" hover:text-blue-600">
                                <a className='font-semibold' href="/">Log In</a>
                            </li>
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;