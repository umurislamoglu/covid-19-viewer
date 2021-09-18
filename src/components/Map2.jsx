import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";



const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = ({ setTooltipContent , countries}) => {
  const mapWidth = 800;
    const mapHeight = 600;
  

  return (
      

  
    

<ComposableMap data-tip="" projectionConfig={{ scale: 160 , center: [0, 0], }}>
        <ZoomableGroup 
        translateExtent={[[0, -mapHeight], [mapWidth, mapHeight]]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    countries.forEach((country) => {
                        if(country.country === NAME) {
                            setTooltipContent(`
                            <div>
                            <p>${country.country}</p>
                            <p>Total Death: ${country.deaths}</p>
                            <p>Total Recovered: ${country.recovered}</p>
                            </div>
                            `)
                        }
                    })
                    // setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    
    
  );
};

export default memo(Map);
