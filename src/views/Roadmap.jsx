import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { roadmap } from '../constants'

const Roadmap = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [aRef, aView] = useInView(options)
    return (
        <>
            <div className="bg-gry relative w-full" id='roadmap'>
                <div className="bg-gradient-to-t from-blk to-transparent h-[50%] w-full absolute left-0 right-0 bottom-0 z-0" />
                <div className="max-w-[1440px] mx-auto px-[2rem] pt-[8rem] flex flex-col gap-y-[5rem] z-40 relative">
                    {/* SECTION TITLE */}
                    <div className="flex flex-col items-center justify-center gap-y-[1rem]">
                        <div className="overflow-hidden" ref={aRef}>
                            <motion.h1
                                initial={{ y: 30 }} animate={aView ? { y: 0 } : {}} transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-pnk to-mgnta bg-clip-text w-max text-transparent font-black text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem]">ROADMAP</motion.h1>
                        </div>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-wht max-w-[25rem] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo erat elit, in lacinia urna ultricies eu.</motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                            className="border-wht/70 border-solid border-[2px] rounded-[5rem] w-[15rem]" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-x-[2rem] gap-y-[1rem]">
                        {roadmap.map((roadmap, i) => (
                            <motion.div
                                initial={{ y: 30, opacity: 0 }} animate={aView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }}
                                className='bg-lgry p-[2rem] rounded-[10px] flex flex-col md:flex-row lg:flex-col gap-y-[3rem] gap-x-[1rem] items-center justify-center' key={i}>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-[12.5rem] leading-[12.5rem] font-black bg-gradient-to-l from-bl to-tl bg-clip-text w-max text-transparent">{roadmap.number}</h1>
                                    <h2 className="text-[2.25rem] leading-[2.25rem] font-black text-wht text-center">{roadmap.title}</h2>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-y-[1rem]">
                                    {roadmap.content.map((content, j) =>
                                        <div className='' key={j}>
                                            <p className="font-bold text-wht">{content.title}</p>
                                            <p className="">{content.text}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap