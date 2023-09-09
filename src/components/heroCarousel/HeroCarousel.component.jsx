import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// component 
import { NextArrow,PrevArrow } from "./arrows.component";

const HeroCarousel = () => {

      const settingsLg = {
        arrows: true,
        autoPlay: true,
        dots: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      }
      
      const settings = {
        arrows : true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

     const images = [
        "https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1682687218147-9806132dc697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
        "https://images.unsplash.com/photo-1693155381071-28e1bccbb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1692982396602-0ddf793b3518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
     ];
                               
      return (
        <>
          
          <div className="lg:hidden">
          <HeroSlider {...settings}>
            {
                images.map((image) => {
                    return (
                      <div className="w-full h-80 px-1 py-2">
                        <img src = {image} alt = "testing" className="w-full h-full rounded-md"/>
                    </div>
                    )
                })
              
            }
          </HeroSlider>
          </div>

          <div className="hidden lg:block">
          <HeroSlider {...settingsLg}>
            {
                images.map((image) => {
                    return (
                      <div className="w-full h-96 px-2 py-3">
                        <img src = {image} alt = "testing" className="w-full h-full rounded-md"/>
                    </div>
                    )
                })
              
            }
          </HeroSlider>
          </div>
          

          

        </> 
      )
          
    };


export default HeroCarousel;