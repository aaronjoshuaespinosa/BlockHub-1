import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Movie = () => {
    const [mousePosition, setMouse] = useState({
        x: 0,
        y: 0
    })

    const windowRef = useRef((event) => {
        const x = -(event.clientX / window.innerWidth) * 30 - 1;
        const y = -(event.clientY / window.innerHeight) * 30 + 1;
        setMouse({ x, y })
    })

    useEffect(() => {

        document.addEventListener("mousemove", windowRef.current);
        console.log(mousePosition.x, mousePosition.y)
        return () => {
            document.removeEventListener("mousemove", windowRef.current);

        }
    }, [mousePosition.x])
    return (
        <>
            <motion.div
                className="min-h-screen w-full bg-[#0F0F0F] flex flex-col gap-y-[1rem] overflow-hidden"
                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: [1, 1.05, 1] }} transition={{ duration: 1, delay: 1 }}
                ref={windowRef}
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
            >
                <motion.div
                    className="flex gap-x-[1rem] h-full w-full items-center justify-center opacity-50"
                    initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }}
                >
                    <img src="/a1.jpg" alt="" className="h-[14rem]" />
                    <img src="/a2.jpg" alt="" className="h-[14rem]" />
                    <img src="/a3.jpg" alt="" className="h-[14rem]" />
                    <img src="/a4.jpg" alt="" className="h-[14rem]" />
                    <img src="/a5.jpg" alt="" className="h-[14rem]" />
                    <img src="/a6.jpg" alt="" className="h-[14rem]" />
                    <img src="/a7.jpg" alt="" className="h-[14rem]" />
                    <img src="/a8.jpg" alt="" className="h-[14rem]" />
                </motion.div>
                <motion.div
                    className="flex gap-x-[1rem] h-full w-full items-center justify-center opacity-50"
                    initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }}
                >
                    <img src="/b1.jpg" alt="" className="h-[15rem]" />
                    <img src="/b2.jpg" alt="" className="h-[15rem]" />
                    <img src="/b3.jpg" alt="" className="h-[15rem]" />
                    <img src="/b4.jpg" alt="" className="h-[15rem]" />
                    <img src="/b5.jpg" alt="" className="h-[15rem]" />
                    <img src="/b6.jpg" alt="" className="h-[15rem]" />
                    <img src="/b7.jpg" alt="" className="h-[15rem]" />
                    <img src="/b8.jpg" alt="" className="h-[15rem]" />
                </motion.div>
                <motion.div className="flex gap-x-[1rem] h-full w-full items-center justify-center opacity-50"
                    initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }}
                >
                    <img src="/c1.jpg" alt="" className="h-[14rem]" />
                    <img src="/c2.jpg" alt="" className="h-[14rem]" />
                    <img src="/c3.jpg" alt="" className="h-[14rem]" />
                    <img src="/c4.jpg" alt="" className="h-[14rem]" />
                    <img src="/c5.jpg" alt="" className="h-[14rem]" />
                    <img src="/c6.jpg" alt="" className="h-[14rem]" />
                    <img src="/c7.jpg" alt="" className="h-[14rem]" />
                </motion.div>
                <motion.div
                    className="flex gap-x-[1rem] h-full w-full items-center justify-center opacity-50"
                    initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }}
                >
                    <img src="/d1.jpg" alt="" className="h-[15rem]" />
                    <img src="/d2.jpg" alt="" className="h-[15rem]" />
                    <img src="/d3.jpg" alt="" className="h-[15rem]" />
                    <img src="/d4.jpg" alt="" className="h-[15rem]" />
                    <img src="/d5.jpg" alt="" className="h-[15rem]" />
                    <img src="/d6.jpg" alt="" className="h-[15rem]" />
                    <img src="/d7.jpg" alt="" className="h-[15rem]" />
                    <img src="/d8.jpg" alt="" className="h-[15rem]" />
                    <img src="/d9.jpg" alt="" className="h-[15rem]" />
                </motion.div>
            </motion.div>
        </>
    )
}

export default Movie