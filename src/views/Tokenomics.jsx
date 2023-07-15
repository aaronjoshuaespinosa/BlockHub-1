import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { tkStats } from '../constants'
import { TbClipboard, TbArrowUpRight } from "react-icons/tb";

const Tokenomics = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [aRef, aView] = useInView(options)
    const [bRef, bView] = useInView(options)
    return (
        <>
            <div className=" bg-gry relative w-full" id='token'>
                <div className="bg-gradient-to-b from-blk to-transparent h-[10rem] w-full absolute left-0 right-0 top-0 z-0" />
                <div className="flex flex-col gap-y-[5rem] z-40 relative max-w-[1440px] mx-auto px-[2rem] pt-[8rem]">
                    {/* SECTION TITLE */}
                    <div className="flex flex-col items-center justify-center gap-y-[1rem]">
                        <div className="overflow-hidden" ref={aRef}>
                            <motion.h1
                                initial={{ y: 30 }} animate={aView ? { y: 0 } : {}} transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-pnk to-mgnta bg-clip-text w-max text-transparent font-black text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem]">TOKENOMICS</motion.h1>
                        </div>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-wht max-w-[25rem] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo erat elit, in lacinia urna ultricies eu.</motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                            className="border-wht/70 border-solid border-[2px] rounded-[5rem] w-[15rem]" />
                    </div>

                    <div className="flex flex-col gap-y-[1rem]">
                        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-x-[2rem] gap-y-[1rem]" ref={bRef}>
                            {tkStats.map((token, i) => (
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }} animate={bView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                                    className='bg-lgry flex flex-col items-center gap-y-[1rem] p-[2.5rem] rounded-[10px] w-full' key={i}>
                                    {/* TOKEN STAT TITLE */}
                                    <h1 className="text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem] text-center text-wht font-black">{token.percent}% {token.stat}</h1>

                                    {/* TOKEN STAT LABEL & INFO */}
                                    <div className="flex justify-between w-full">
                                        <p className="text-[0.85rem] md:text-[1.125rem]">{token.label}</p>
                                        <p className="text-[0.85rem] md:text-[1.125rem] font-bold">{token.important}</p>
                                    </div>

                                    {/* TOKEN STAT PERCENTAGE */}
                                    <div className="w-[100%] h-[1.5rem] bg-gry relative">
                                        <div className="w-[5%] h-full bg-gradient-to-r from-tl to-bl"></div>
                                    </div>

                                    {/* TOKEN STAT UNITS */}
                                    <div className="flex justify-between w-full">
                                        <p className="">0%</p>
                                        <p className="">100%</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }} animate={bView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-[1rem]">
                            <div className="flex items-center gap-x-[.5rem]">
                                <p className="text-[1.5rem] cursor-pointer hover:text-tl hover:scale-[1.2] transition-all ease-in-out duration-[0.3s]"><TbClipboard /></p>
                                {/* <p className="font-bold truncate">0xb794f5ea0ba39494ce839613fffba74279579268</p> */}
                                <p className="font-bold truncate">0xb794f5ea0ba3949...</p>
                            </div>
                            <div className="flex gap-x-[1rem] font-black">
                                <button className="flex gap-x-[0.5rem] items-center text-tl p-[0.5rem] border-solid border-[2px] border-tl rounded-[5px] hover:bg-tl/10 transition-all ease-in-out duration-[0.3s]">CHARTS <TbArrowUpRight className='text-[1.25rem]' /></button>
                                <button className="text-gry bg-tl p-[0.5rem] border-solid border-[2px] border-tl rounded-[5px] hover:border-tl/0 hover:bg-tl/70 transition-all ease-in-out duration-[0.3s]">BUY TOKEN</button>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }} animate={bView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 1.1 }}
                        className="flex flex-col md:flex-row gap-y-[2rem] gap-x-[1rem] lg:gap-x-[4rem] justify-between lg:justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="bg-gradient-to-l from-bl to-tl bg-clip-text w-max text-transparent font-black text-[3.25rem] lg:text-[4rem] leading-[3.25rem] lg:leading-[4rem]">45k+</h1>
                            <p className="tracking-[0.1rem]">TOTAL SUPPLY</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="bg-gradient-to-l from-bl to-tl bg-clip-text w-max text-transparent font-black text-[3.25rem] lg:text-[4rem] leading-[3.25rem] lg:leading-[4rem]">BlockHub</h1>
                            <p className="tracking-[0.1rem]">TOKEN NAME</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="bg-gradient-to-l from-bl to-tl bg-clip-text w-max text-transparent font-black text-[3.25rem] lg:text-[4rem] leading-[3.25rem] lg:leading-[4rem]">$BH</h1>
                            <p className="tracking-[0.1rem]">TICKER</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Tokenomics