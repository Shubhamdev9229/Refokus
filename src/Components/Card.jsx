import React from "react";
import { GoArrowRight } from "react-icons/go";
function Card({ width, start, para }) {
  return (
    <div className={` text-white bg-zinc-800 hover:bg-violet-500  p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <GoArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading</h1>
      </div>
      <div className="down w-full ">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-2 border-zinc-500">
              Contact us
            </button>
          </>
        ) }
        {
            para && (
                <p className="text-sm text-zinc-500 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            )
        }

        
      </div>
    </div>
  );
}

export default Card;
