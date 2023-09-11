import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PremierImages from "../config/TempPosters.config";


const HomePage = () => {
    return (
        <>
      <div className="flex flex-col gap-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 px-3 py-3 ">
            The best of Entertainment !
        </h1>
           <EntertainmentCardSlider />
        </div>

        <div className="bg-navColor-200 py-16">
            <div className="container mx-auto px-4">
                
            <div className="flex">
                <img src = "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Premier logo"/>   
            </div>

           <PosterSlider image = {PremierImages} title = "Premiers" subtitle = "Brand new release every Friday !" isDark />
            </div>
        </div>
      </div>

        
        <div className="container mx-auto px-4">
            <PosterSlider image = {PremierImages}
            title = "Online Streaming Events"
            isDark = {false} />
        </div>
        
        </>
    )
};

export default HomePage;
