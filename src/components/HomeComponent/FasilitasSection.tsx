import React from "react";
import FasilitasKami from "@/data/FasilitasKami";

const FasilitasSection = () => {
  return (
    <div className="bg-secondary-graylight-100">
      <div className="container mx-auto py-8 md:py-16">
        <h1 className="mb-6 ml-4 md:ml-0 text-2xl md:text-3xl font-bold tracking-tight">
          Fasilitas Kami
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-y-8">
          {FasilitasKami.map((item, index) => (
            <div
              key={index}
              className="border border-primary-red bg-white w-40 h-40 md:w-64 md:h-64 p-4 rounded-full text-center text-black grid items-center mx-auto md:mx-0"
            >
              <div className="mx-auto">
                <item.icon className="w-12 h-12 md:w-24 md:h-24" />
              </div>
              <p className="text-xs md:text-sm font-semibold -mt-2 md:-mt-12 md:px-6">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FasilitasSection;
