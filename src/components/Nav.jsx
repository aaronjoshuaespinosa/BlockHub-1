import React, { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import { motion } from 'framer-motion'

const Nav = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const controlNavbar = () => {
        if (scrollY > 150) {
            setShow(true);
            console.log(show)
            console.log(scrollY)
        }
        else {
            setShow(false)
        }
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }}
                className={`py-[1.5rem] fixed w-full z-50 transition-all ease-in-out duration-[0.3s] ${show ? 'bg-black/30 backdrop-blur-md border-b-[1px] border-wht/30 border-solid' : 'bg-transparent'}`}>
                <div className="flex flex-row items-center justify-between max-w-[1440px] mx-auto px-[2rem]">
                    <a href="#home">
                        <div className="flex flex-row items-center gap-x-[0.5rem] cursor-pointer">
                            <img src="./blockHub.png" alt="BlockHub Logo" className="h-[2rem]" />
                            <p className='bg-gradient-to-r from-pnk to-mgnta bg-clip-text w-max text-transparent font-black text-[1.5rem] pointer-events-none'>Block<span className='bg-gradient-to-r from-bl to-tl bg-clip-text w-max text-transparent'>Hub</span></p>
                        </div>
                    </a>
                    <div className="hidden lg:flex flex-row gap-x-[2rem] tracking-[0.15rem] text-sm">
                        {navLinks.map((links, i) => (
                            <a href={links.link} key={i} className='font-bold hover:text-pnk transition-all ease-in-out duration-[0.2s]'><p>{links.name}</p></a>
                        ))}
                    </div>
                    <button className='hidden lg:block px-[2rem] py-[0.8rem] border-wht/70 border-solid border-[2.5px] font-bold rounded-[5rem] hover:border-pnk hover:text-pnk transition-all ease-in-out duration-[0.3s]'>BUTTON</button>
                </div>
            </motion.nav>
        </>
    )
}

export default Nav