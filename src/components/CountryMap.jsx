import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";

const CountryMap = (props) => {

    let country = [];
    country = props.countries.find(
      (country) => country.country === props.match.params.country
    );

    const position = [country.countryInfo.lat,country.countryInfo.long]

    const onClick = () => {
        props.history.push("/latest")
    }
        
  


  return (
    <div className="overflow-hidden">
        {country && position && (
        <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
        {<div>
            <p>{country.country}</p>
            <p>Total Cases: {country.cases}</p>
            <p>Total Deaths: {country.deaths}</p>
            <p>Total critical: {country.critical}</p>
            <p>Total Recovered: {country.recovered}</p>
            <button className="btn btn-primary btn-sm" onClick={onClick}> Go Back</button>
           
            <p></p>
        </div>
        }
      </Popup>
        </Marker>
      </MapContainer>
      )}
      
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps)(CountryMap);
