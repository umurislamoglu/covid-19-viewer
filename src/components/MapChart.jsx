import React from "react";
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";



const mapStyles = {
  width: "90%",
  margin: "0 auto",
  display: "block",
  height: "auto",
};

const markers = [];
let marker = []
let coordinates = {};

let countryData = []


const MapChart = (props , setTooltipContent) => {
 
 
  props.countries.forEach((country) => {
    coordinates = {
      coordinates: [country.countryInfo.long, country.countryInfo.lat],
    };
    
    
    countryData = [country.country,country.deaths,country.recovered];
    
    marker = [coordinates,countryData]
    markers.push(marker);
  });

  
console.log(markers)
  
  return (
    <div style={{ width: "100%" }}>
      <ComposableMap
        width={500}
        height={500}
        projection="orthographic"
        projectionConfig={{ scale: 220 }}
        style={mapStyles}
        
      >
        <ZoomableGlobe>
          <circle
            cx={250}
            cy={250}
            r={220}
            fill="transparent"
            stroke="#CFD8DC"
          />
          <Geographies
            disableOptimization
            geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
          >
            {(geos, proj) =>
              geos.map((geo, i) => (
                <Geography
                  key={geo.id + i}
                  geography={geo}
                  projection={proj}
                  style={{
                    default: {
                      fill: "#CFD8DC",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          <Markers>
            {markers.map((marker , idx) => (
              <Marker
                key={idx}
                marker={marker[0]}
                style={{
                  hidden: { display: "none" },
                }}
                onMouseEnter = {() => {
                 

                  console.log("mouse girdi")
                  console.log(marker[1])
                  
                  setTooltipContent= `
                  <div>
                  <p>${marker[1][0]}</p>
                  <p>Total Death: ${marker[1][1]}</p>
                  <p>Total Recovered: ${marker[1][2]}</p>
                  </div>
                  `
                    

                  ;
                  console.log(setTooltipContent)
                  
                  
                 
                }}
                onMouseLeave={() => {
                  
                  console.log("mouse çıktı")
                  setTooltipContent= "";
                  console.log(setTooltipContent)
                  
                }}
                
               
              >
                
                <circle cx={0} cy={0} r={6} fill="#FF5722" stroke="#FFF" />
              </Marker>
            ))}
          </Markers>
        </ZoomableGlobe>
      </ComposableMap>
    </div>
  );
};


export default MapChart
