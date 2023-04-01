import React from 'react'
import taxi from "../public/taxi.png"
import meta from "../public/meta.png"
import pana from "../public/chakra pana.png"
import Image from "next/image"
import Link from "next/link"
export const ProjectData = [
    {   id : 7 ,
        heading : "Taxi Driving App" ,
        imageData : taxi,
        url : "https://github.com/YusraAqeel12/Taxi-Driving-App"
    } ,
    {   id : 8 ,
        heading : "Panaverse (Chakra UI)" ,
        imageData : pana, 
        url : " https://panaverse-by-ahmed.vercel.app/ "
    } ,
    {   id : 7 ,
        heading : " Panaverse (Tailwind)" ,
        imageData : meta, 
        url :" https://tailwind-pana-verse.vercel.app/"
    } ,
    
    ]

const Proj = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-5 flex flex-col ">
            <div>
            <h5 className=" text-5xl text-white font-bold p-3 "> Portfolio</h5>
            </div>

            <div className="grid grid-rows-1 sm:grid-cols-3  justify-center items-center gap-3">
            {ProjectData.map((item , i )=>(
                <Link key={i} href={item.url} target='_blank'>
                    <div key={i}  className=" cursor-pointer rounded-md object-cover justify-center items-center p-3 hover:scale-90 duration-100 shadow-inner ">  
                        <Image className="rounded-md " src={item.imageData} alt={item.heading} />
                        <h1 className=" text-white mx-auto my-auto" >{item.heading}</h1>
             </div>
             </Link>
            

                ))}
            </div>




        </section>


  )
}

export default Proj

//small honay kai baad grid col three rahay warna grid row one rahay