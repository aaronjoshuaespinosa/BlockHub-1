import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0F0F0F] relative w-full">
                <div className="max-w-[1440px] mx-auto p-[2rem] flex justify-between items-center w-full font-bold">
                    <p className="">BlockHub 2023</p>
                    <a href="#home"><p className="cursor-pointer hover:underline hover:text-wht transition-all ease-in-out duration-[0.2s]">Go to Top</p></a>
                </div>
            </footer>
        </>
    )
}

export default Footer