import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { abtContent1 } from '../constants'
import { abtContent2 } from '../constants'

const About = () => {
    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [aRef, aView] = useInView(options)
    const [bRef, bView] = useInView(options)
    const [cRef, cView] = useInView(options)
    const [dRef, dView] = useInView(options)
    const [eRef, eView] = useInView(options)
    const [fRef, fView] = useInView(options)
    const [gRef, gView] = useInView(options)
    const [hRef, hView] = useInView(options)
    const [iRef, iView] = useInView(options)
    const [jRef, jView] = useInView(options)

    return (
        <>
            <div className="bg-blk relative overflow-hidden w-full" id='about'>
                <div className="bg-gradient-to-b from-blk to-transparent h-[10rem] w-full absolute left-0 right-0 top-0 z-20" />
                <div className="bg-gradient-to-t from-blk to-transparent h-[10rem] w-full absolute left-0 right-0 bottom-0 z-20" />
                <div className="h-full w-[10rem] md:w-[20rem] bg-bl absolute top-0 bottom-0 -left-[15rem]  my-auto blur-[200px] rounded-[5rem] z-0" />
                <div className="h-full w-[10rem] md:w-[20rem] bg-pnk absolute top-0 bottom-0 -right-[15rem]  my-auto blur-[200px] rounded-[5rem] z-0" />
                <div className="flex flex-col gap-y-[6rem] z-40 relative max-w-[1440px] mx-auto px-[2rem] pt-[8rem]">
                    {abtContent1.map((abt, i) => (
                        <div className='flex flex-col lg:flex-row gap-x-[2rem] gap-y-[1rem]' key={i}>
                            <div className="overflow-hidden" ref={aRef}>
                                <motion.h1
                                    initial={{ y: "100%" }} animate={aView ? { y: 0 } : {}} transition={{ duration: 0.5 }}
                                    className="bg-gradient-to-r block lg:hidden from-pnk to-mgnta bg-clip-text w-auto md:w-max text-transparent font-[1000] text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem]">{abt.title}</motion.h1>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }} animate={bView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} ref={bRef}
                                className='h-[25rem] w-full lg:w-[25rem] rounded-[10px] bg-lgry shrink-0'>
                                <img src="" alt="" className="" />
                            </motion.div>
                            <div className="flex flex-col gap-y-[1rem] overflow-hidden">
                                <div className="overflow-hidden" ref={aRef}>
                                    <motion.h1
                                        initial={{ y: "100%" }} animate={aView ? { y: 0 } : {}} transition={{ duration: 0.5 }}
                                        className="bg-gradient-to-r hidden lg:block from-pnk to-mgnta bg-clip-text w-max text-transparent font-[1000] text-[4rem] leading-[4rem]">{abt.title}</motion.h1>
                                </div>
                                <div className="flex flex-col gap-y-[1rem]">
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }} animate={cView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} ref={cRef}
                                        className="">{abt.par1}</motion.p>
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }} animate={dView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }} ref={dRef}
                                        className="">{abt.par2}</motion.p>
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }} animate={iView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 1.1 }} ref={iRef}
                                        className="">{abt.par3}</motion.p>
                                    <motion.p
                                        initial={{ y: 30, opacity: 0 }} animate={jView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 1.4 }} ref={jRef}
                                        className="">{abt.par4}</motion.p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {abtContent2.map((abt, i) => (
                        <div className='flex flex-col-reverse lg:flex-row gap-x-[2rem] gap-y-[1rem]' key={i}>
                            <div className="flex flex-col gap-y-[2rem]">
                                <div className="overflow-hidden" ref={fRef}>
                                    <motion.h1
                                        initial={{ y: "100%" }} animate={fView ? { y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                                        className="bg-gradient-to-r hidden lg:block from-bl to-tl bg-clip-text w-max text-transparent font-[1000] text-[4rem] leading-[4rem]">{abt.title}</motion.h1>
                                </div>
                                <div className="flex flex-col gap-y-[1rem]">
                                    <motion.p ref={gRef}
                                        initial={{ y: 30, opacity: 0 }} animate={gView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
                                        className="">{abt.par1}</motion.p>
                                    <motion.p ref={hRef}
                                        initial={{ y: 30, opacity: 0 }} animate={hView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.8 }}
                                        className="">{abt.par2}</motion.p>
                                </div>
                            </div>
                            <motion.div ref={eRef}
                                initial={{ opacity: 0, y: 30 }} animate={eView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}
                                className='h-[25rem] w-full lg:w-[25rem] rounded-[10px] bg-lgry shrink-0'>
                                <img src="" alt="" className="" />
                            </motion.div>
                            <div className="overflow-hidden" ref={fRef}>
                                <motion.h1
                                    initial={{ y: "100%" }} animate={fView ? { y: 0 } : {}} transition={{ duration: 0.5 }}
                                    className="bg-gradient-to-r block lg:hidden from-bl to-tl bg-clip-text w-auto md:w-max text-transparent font-[1000]  text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem]">{abt.title}</motion.h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About