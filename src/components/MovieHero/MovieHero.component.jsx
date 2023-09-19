import React from "react";
import {BsDot} from "react-icons/bs"
const MovieHero = () => {
    return (
          <>
            <div className="md:hidden">
                <img 
                 src = "https://image.tmdb.org/t/p/original/zSBVQIvx4UIHoFf1oDvixHyIQrz.jpg"
                 alt = "poster"
                />
            </div>

            <div className="hidden md:block lg:hidden">
            <img 
                 src = "https://image.tmdb.org/t/p/original/zSBVQIvx4UIHoFf1oDvixHyIQrz.jpg"
                 alt = "poster"
                />
            </div>

            <div className=" relative hidden lg:block" style={{height:"40rem"}}>
            
             <div 
              className="absolute w-full h-full z-auto"
              style={{backgroundImage:"linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}
             />

                <div className="absolute z-30 w-68 h-96 left-24 top-20 flex">
                <img
                src = "https://www.aceshowbiz.com/images/still/inception_poster19.jpg"
                alt="poster"
                className="w-full h-full px-10"
                />

                    <div className="text-white py-16">
                    <h1  className="text-4xl  font-bold py-4">
                        Inception
                    </h1>
                    <div >
                    <h3 className="flex gap-1 text-gray-300">
                        English<BsDot/>Languages: 
                        <h3 className="text-red-500 hover: cursor-pointer hover:underline" >Audio(1),Subtitles(1)</h3>    
                    </h3>
                    <div className="display: inline-flex py-3 gap-2" >
                    <h3 className=" flex gap-1">2h 28m <BsDot/> </h3>
                    <h3 className="hover: cursor-pointer hover:underline">Action,</h3>
                    <h3 className="hover: cursor-pointer hover:underline">Adventure,</h3>
                    <h3 className="hover: cursor-pointer hover:underline">Sci-Fi</h3>
                    </div>

                    <div className="display: flex gap-4 py-5">
                    <button className="rounded-lg h-12 w-56 bg-red-500">Rent ₹ 119</button>
                    <button className="rounded-lg h-12 w-56 bg-red-500">Buy ₹ 489</button>
                    </div>

                   
                    
                    </div>
                    </div>
               
                </div>
             
             <div  className="w-full h-full">
            <img 
                 src = "https://image.tmdb.org/t/p/original/zSBVQIvx4UIHoFf1oDvixHyIQrz.jpg"
                 alt = "poster"
                 className="w-full h-full rounded-xl"
                />
            </div>
            </div>
          </>
    )
};

export default MovieHero;