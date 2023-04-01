import { FC } from "react"
const Wrapper : FC<{ children: React.ReactNode }> = ({ children })=>{
    return(
        <div className="max-w-lg mx-auto px-3">
            {children}
        </div>


    )
}
export default Wrapper