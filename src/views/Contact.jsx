import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TbBrandTwitter, TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [aRef, aView] = useInView(options)
    return (
        <>
            <div className="bg-blk relative w-full">
                <div className="max-w-[1440px] mx-auto px-[2rem] py-[8rem] flex flex-col items-center justify-center gap-y-[2rem]" ref={aRef}>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                        className="border-wht/70 border-solid border-[2px] rounded-[5rem] w-[15rem]" />
                    <motion.div
                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                        className=" flex flex-col items-center text-center">
                        <h1 className="text-[2.5rem] leading-[2.5rem] md:text-[3rem] md:leading-[3rem] font-bold bg-gradient-to-l from-bl to-tl bg-clip-text w-max text-transparent">Connect with us</h1>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo erat elit, in lacinia urna ultricies?</p>
                    </motion.div>
                    <motion.a
                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 1.1 }}
                        href='mailto:contact@email.com'><p className="text-[1.5rem] md:text-[2.25rem] text-wht font-bold cursor-pointer hover:underline transition-all ease-in-out duration-[0.3s]">contact@email.com</p></motion.a>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 1.4 }}
                        className="text-wht/70 text-[2rem] flex gap-x-[2rem]">
                        <a href="#"><TbBrandTelegram className='hover:text-tl hover:scale-[1.2] cursor-pointer transition-all ease-in-out duration-[0.3s]' /></a>
                        <a href="#"><TbBrandTwitter className='hover:text-tl hover:scale-[1.2] cursor-pointer transition-all ease-in-out duration-[0.3s]' /></a>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Contact