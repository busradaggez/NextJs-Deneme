'use client'
import React from 'react'
import { useEffect, useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <>
            <div className="items-center text-center bg-white dark:bg-black dark:text-white">
                <a href="" className="font-semibold text-lg text-black hover:text-yellow-200 hover:text-2xl dark:text-white dark:hover:text-yellow-200">Selam</a>
            </div>

            <header className="bg-mycolor4 p-6 shadow-2xl">
                <div className="container mx-auto flex justify-around items-center">

                    <div className="text-white text-lg md:text-xl font-semibold">
                        logo
                    </div>

                    <div className="hidden md:block md:w-1/2">
                        <input type="text " className="w-full focus: outline-none pl-2" />
                    </div>

                    <div className="text-white flex text-lg font-semibold gap-3">

                        <div>login</div>

                        <button onClick={() => setDarkMode(!darkMode)}>
                            dark
                        </button>

                    </div>
                </div>
            </header>

            <div className="flex items-center  p-3 space-x-5 justify-center bg-mycolor3">
                <a href="" className="text-white hover:text-mycolor6">Anasayfa</a>
                <a href="" className="text-white hover:text-mycolor6">Blog</a>
                <a href="" className="text-white hover:text-mycolor6">İletşim</a>
            </div>

        </>
    )
}

export default Header