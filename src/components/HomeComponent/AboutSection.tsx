import React from "react";
import Component3B from "../ElementComponent/Component3B";
import TentangGo from "../ElementComponent/TentangGo";
import ProductMenuComponent from "../ElementComponent/ProductMenuComponent";

const AboutSection = () => {
  return (
    <div className="bg-secondary-graylight-100 relative">
      <ProductMenuComponent />
      <div className="container mx-auto px-2 sm:px-0">
        <Component3B />
        <TentangGo />
      </div>
    </div>
  );
};

export default AboutSection;
