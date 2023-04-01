import TechBox from "@/layout/TechBox"
import Image from "next/image"
import  React  , { FC } from "react"
import ReactImage from "../public/react.png"
import java from "../public/javascript.png"
import py from "../public/python.png"
import tw from "../public/tailwind.png"
import Link from "next/link"
export const TechData=[
    {
        heading : " ReactNative " ,
        image : ReactImage 
    } , 

    {
        heading : " JavaScript " ,
        image : java
    } ,

    {
        heading : " Python " ,
        image : py
    } , 
    {
        heading : " TailWind " ,
        image : tw
    }
]
const Technologies = () => {


    return(
        <section className="  mx-auto max-w-screen-lg p-5 flex flex-row justify-center w-full h-full   ">

            {/* HEADING */}
            <div >
                <h1 className=" text-5xl text-white font-bold p-3  "> Skills </h1>
            </div>
            
            {/* TECHS */}
            <div className="w-full grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-5 text-center py-8 justify-center  " > 
            { TechData.map ((item , i) => (
            <div key={i} className=" shadow-md hover:scale-105 duration-75 justify-center items-center ">
                <div className="mx-auto">
                    <Image src={item.image} alt={item.heading} width={90}/ >
                </div> 

                <div className="mx-auto text-white"> {item.heading}</div>
                </div> ))} </div> 
                </section>          
            )
}
export default Technologies
