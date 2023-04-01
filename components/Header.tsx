import Link from "next/link"
import Wrapper from "../layout/Wrapper"
import React from "react"

const Header = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-3 ">
            <header className="flex justify-between items-center text-white text-lg font-medium py-8 lg:gap-2">
            <div className="flex ">Portfolio
            </div>

            <div >
                <li className="flex space-x-5">
                    <ul ><Link  href={'/'}>Home</Link></ul>
                    <ul ><Link href={'/Technologies'}> Skills</Link></ul>
                    <ul ><Link href={'/Proj'}> Projects</Link></ul>

                </li>
            </div>
        </header>
        
        </section>


    )
}
export default Header

{/*
<Wrapper>

       

    </Wrapper>
*/}