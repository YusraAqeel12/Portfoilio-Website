import React, { FC } from 'react'
interface IProps{
    Heading : "string" ,
    
}
const TechBox : FC<IProps> = ({Heading }) =>{
    return(
        <div>
             <div className=" border rounded-md flex-1 relative flex flex-col justify-center px-8 py-12">
            <h4 className="font-bold text-lg">{Heading}</h4>
            </div>



        </div>
    )
}
export default TechBox