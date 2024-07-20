/* eslint-disable no-unused-vars */
// import React from 'react'
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="monial" className="mt-10 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl h-20 text-center my-10 lg:my-20 bg-gradient-to-r from-cyan-300 to-blue-700 text-transparent bg-clip-text">
        What people are saying?
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((test, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
            <div className="bg-neutral-900 rounded-md p-6 border border-neutral-800 font-thin">
              <p>{test.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={test.image}
                  alt={test.user}
                />
                <div>
                    <h6>{test.user}</h6>
                    <span className="text-sm text-neutral-400 italic">{test.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
