import React from "react";
// props -> src, title, subtitle, isDark(bool)

const Poster = (props) => {
    return (
        <>
          <div className="flex flex-col items-start gap-3 px-3 py-3">
            <div className="h-80 ">
                <img src= {props.src} alt= {props.title} className="w-full h-full rounded-xl cursor-pointer"/>
            </div>

            <h3 className= {
                `text-lg font-bold ${
                    props.isDark ? "text-white" : "text-gray-700"
                } px-1`
            }>{props.title}</h3>

            <p className= {
                `text-md font-normal ${
                    props.isDark ? "text-white" : "text-gray-700"
                } px-1`
            }>{props.subtitle}</p>

        </div>
        </>
    )
};

export default Poster;