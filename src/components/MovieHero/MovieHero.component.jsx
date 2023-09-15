import React from "react";

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

                <div className="absolute z-30 w-68 h-96 left-64 top-20">
                <img
                src = "https://www.aceshowbiz.com/images/still/inception_poster19.jpg"
                alt="poster"
                className="w-full h-full"
                />

                

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