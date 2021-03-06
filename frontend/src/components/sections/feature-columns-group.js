import React from "react"
import Image from "../image";

const FeatureColumnsGroup = ({ data }) => {
  return (
    <div className="container bg-pink-100 flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12">
      {data.features.map((feature) => (
        <div className="flex-1 text-lg" key={feature.id}>
          <Image media={feature.icon} className="w-10" />
          <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureColumnsGroup;
