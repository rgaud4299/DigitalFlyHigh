import React from "react";
    import { CodeBracketIcon } from "@heroicons/react/24/solid"; // heroicons for coding icon



const Card = ({ title, description ,Icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300 grid grid-cols-10 h-56">
      
      {/* Icon (3/10) */}
      <div className="col-span-3 flex items-center justify-center bg-page-bg">
        {/* <CodeBracketIcon className="w-20 text-btn-color" /> */}
         <div className="col-span-3 flex items-center justify-center bg-page-bg">
        {Icon && <Icon className="w-20 h-20 text-btn-color" />}
      </div>
      </div>

      {/* Content (7/10) */}
      <div className="col-span-7 p-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};




export default Card;



