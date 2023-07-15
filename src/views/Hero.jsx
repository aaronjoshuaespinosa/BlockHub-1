import React from 'react'
import { motion } from 'framer-motion'
import Movie from '../views/Movie'

const Hero = () => {
    return (
        <>
            <div className="py-[1.5rem] min-h-[100vh] flex items-center justify-center bg-blk relative" id='home'>
                <div className="h-full w-full absolute opacity-30">
                    {/* <Movie /> */}
                    <motion.img src="/hero.jpg" alt="hero image"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.5 }}
                        className="object-cover w-full h-full" />
                </div>
                <div className="bg-gradient-to-b from-black to-transparent h-[10rem] w-full absolute top-0 z-0" />
                <div className="flex flex-col justify-center items-center text-center max-w-[1440px] mx-auto px-[2rem] gap-y-[2rem] z-20">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 1.5 }}
                            className="text-wht text-[3rem] leading-[3rem] md:text-[5.625rem] font-black md:leading-[6rem]">Lorem ipsum dolor, consectetur adipiscing.</motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 2 }}
                        className="text-[1rem] md:text-[1.5rem] max-w-[50rem]">Experience a new era of online connection and creativity with Blockhub - the forefront of decentralized social media. Discover an NFT marketplace, crypto wallet, and seamless e-commerce integration all in one platform. Join the revolution now!</motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 2.5 }}
                        href="#"><button className="bg-gradient-to-b from-pnk to-mgnta px-[4rem] py-[1rem] rounded-[5rem] font-bold text-wht tracking-[0.25rem] border-[2px] border-solid border-pnk hover:bg-gradient-to-b hover:from-pnk/50 hover:to-mgnta/50 transition-all ease-in-out duration-[0.3s]">EXPLORE</button></motion.a>
                </div>
                <div className="bg-gradient-to-t from-blk to-transparent h-[20rem] w-full absolute bottom-0 z-0" />
            </div>
        </>
    )
}

export default Hero