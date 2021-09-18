import React from "react";
import { connect } from "react-redux";


const CountryDetails = (props) => {
    
  let country = [];
  country = props.countries.find(
    (country) => country.country === props.match.params.country
  );

  const onClick = () => {
      props.history.push("/latest")
  }
  
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 mb-5" >
      {country && (
          <div className="container align-self-center w-50">
              <div className="card">
          <div className="card-header d-flex align-items-center justify-content-center">
            <h2>{country.country}</h2>
          </div>
          <div className="card-body d-flex flex-column">
              <div className="align-self-center"><img src={country.countryInfo.flag} alt="flag" className="thumbnail rounded card-image"/></div>
            
            <div className="container">
            <div className="mt-3 fw-light">
              <h5>Country Info</h5>

              <p>Latitude: {country.countryInfo.lat}</p>
              <p>Longitude: {country.countryInfo.long}</p>
              <p>Continent: {country.continent}</p>
              <p>Population: {country.population}</p>
            </div>
            <div className="mt-3 fw-light">
              <h5>Country Today Covid-19 Info</h5>
              <p>Deaths: {country.todayDeaths}</p>
              <p>Cases: {country.todayCases}</p>
              <p>Recovered: {country.todayRecovered}</p>
            </div>
            <div className="mt-3 fw-light">
              <h5>Country Total Covid-19 Info</h5>
              <p>Deaths: {country.deaths}</p>
              <p>Critical: {country.critical}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Tests: {country.tests}</p>
            </div>
            <div className="mt-3 fw-light">
              <h5>Country Per 1 Mln Covid-19 Info</h5>
              <p>Deaths: {country.deathsPerOneMillion}</p>
              <p>Critical: {country.criticalPerOneMillion}</p>
              <p>Recovered: {country.recoveredPerOneMillion}</p>
              <p>Tests: {country.testsPerOneMillion}</p>
            </div>
            <div className="mt-3 fw-light">
              <h5>Country 1 Per People Covid-19 Info</h5>
              <p>Deaths: {country.oneDeathPerPeople}</p>
              <p>Case: {country.oneCasePerPeople}</p>
              <p>Tests: {country.oneTestPerPeople}</p>
            </div>
            </div>
           
          </div>
          <div className="card-footer d-grid gap-2">
            <button onClick={onClick} className="btn btn-primary">Go Back</button>
          </div>
        </div>
          </div>
        
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(CountryDetails);
