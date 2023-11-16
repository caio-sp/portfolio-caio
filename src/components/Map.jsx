import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [53.0, 10.0, 0],
        center: [-5, -3],
        scale: 850
      }}
      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#ffffffb8"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-46.6388,-23.5489]}
        dx={60}
        dy={-50}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="8" textAnchor="start" alignmentBaseline="middle" fill="#ffffff">
          {"São Paulo - SP"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
