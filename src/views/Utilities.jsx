import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { utilities } from '../constants'

const Utilities = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [aRef, aView] = useInView(options)
    const [bRef, bView] = useInView(options)
    return (
        <>
            <div className="bg-blk relative w-full" id='util'>
                <div className="flex flex-col gap-y-[5rem] max-w-[1440px] mx-auto px-[2rem] pt-[8rem]">
                    {/* SECTION TITLE */}
                    <div className="flex flex-col items-center justify-center gap-y-[1rem]">
                        <div className="overflow-hidden" ref={aRef}>
                            <motion.h1
                                initial={{ y: 30 }} animate={aView ? { y: 0 } : {}} transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-pnk to-mgnta bg-clip-text w-max text-transparent font-black text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem]">UTILITIES</motion.h1>
                        </div>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-wht max-w-[25rem] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo erat elit, in lacinia urna ultricies eu.</motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                            className="border-wht/70 border-solid border-[2px] rounded-[5rem] w-[15rem]" />
                    </div>

                    {/* UTILITIES */}
                    <div className="flex flex-col lg:flex-row gap-y-[1rem] gap-x-[1rem] flex-wrap ">
                        {utilities.map((utility, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }} animate={aView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
                                className='flex flex-col gap-x-[2rem] gap-y-[1rem] rounded-[10px] bg-gry p-[1.5rem] basis-[32.5%] w-full' key={i}>
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }}
                                    className="h-auto md:h-[25rem] w-full p-[1rem] rounded-[10px] bg-lgry shrink-0 flex items-center justify-center">
                                    <img src={utility.img} alt="utility image" className="w-full" />
                                </motion.div>
                                <div className="flex flex-col gap-y-[1rem]">
                                    <motion.h1
                                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }}
                                        className="bg-gradient-to-l from-bl to-tl bg-clip-text text-transparent font-black text-[2rem] leading-[2rem] lg:text-[3rem] lg:leading-[3rem]">{utility.title}</motion.h1>
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                                        className="text-[1.25rem] text-wht font-bold">{utility.subtitle}</motion.p>
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                                        className="">{utility.content}</motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Utilities