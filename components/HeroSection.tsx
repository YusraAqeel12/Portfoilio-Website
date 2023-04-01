
import React from "react";
import css from "../styles/Home.module.css"
import Header from "./Header";
import Wrapper from "../layout/Wrapper";
import Typewriter from 'typewriter-effect';
import Technologies from "./Technologies";
import Proj from "./Proj";

const HeroSection = () =>{
    return(
        <section className={css.bg}>
            <Header/>
            
            <div className="max-w-lg mx-7 my-14 ">
            
            {/* Text */}
                <div className=" justify-center items-center">
                    <h2 className=" text-white text-xl" >Hi There , I am</h2>
                    <h5 className="text-slate-50 text-6xl font-bold mt-5 mb-3">Yusra Aqeel</h5>
                    <h5 className="text-slate-50 text-4xl font-bold">I am a , <span className="text-green-400">  <Typewriter  options={{strings: ['Software Engineer' , 'ReactNative Developer' ,' Web 3 Enthusiast' ,' Metaverse Enthusiast ',' BlockChain Enthusiast'],autoStart: true , loop :true}} /></span> </h5>
                    <p className="text-white text-lg py-9  "> I am a React Native Developer  specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications using Next JS .</p>
                </div>
            
            {/** Button */}
            <button className="border-green-400 border-2 px-8 py-2 text-white font-medium text-xl items-center justify-center hover:bg-green-300 border-green-300 font-bold">View Work</button>
            </div>

            
            <Technologies/>
            <Proj/>
            
            </section>
    )
}
export default HeroSection