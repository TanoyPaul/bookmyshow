import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {SiBookmyshow} from "react-icons/si";

const MoviePage = () => {
    return (
        <>
          <MovieHero />
          <div className="my-12 container lg:w-1/2 lg:ml-36">

              <div className="flex flex-col items-start gap-3">
                <h2 className="font-bold text-2xl">
                  About the movie
                </h2>
                <p>
                Dom is skilled at stealing secrets from dreams, but it cost him everything. Now, he is offered his life back if he can pull off the reverse and plant an idea in a C.E.O`s mind.
                </p>
              </div>

              <div className="my-8">
                <hr />
              </div>
          </div>

          <div className="lg:ml-36">
            <h1 className="font-bold text-xl py-4">Applicable Offers</h1>

            <div className="flex flex-row items-start gap-2 lg:w-1/2 bg-yellow-100 border-yellow-500 border-dashed border-2 rounded-md p-3">           
            <div className="w-6 h-6">
            <SiBookmyshow className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">Filmy Pass</h3>
              <p className="text-gray-700 text-sm">Get Rs.75* off on 3 movies you buy or rent on stream. Get Filmy Pass.</p>
            </div>
            </div>

           
          </div>
      
        </>
    )
};

export default MoviePage;
