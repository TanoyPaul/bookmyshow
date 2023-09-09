import React from "react";

import Poster from "../Poster/poster.component";

import settings from "../../config/PosterCarousel.config";

import Slider from "react-slick";

const PosterSlider = (props) => {
    return (
        <>
          <div className="flex flex-col items-start px-4 py-0">
            <h3 className="text-white text-xl font-bold">{props.title}</h3>
            <p className="text-white text-sm ">{props.subtitle}</p>
            
        </div>
          <Slider {...settings}>
                {props.image.map(
                    (image) => {
                        return (
                            <Poster {...image} isDark />
                        )
                    }
                )}
          </Slider>
        </>
    )
}
export default PosterSlider;