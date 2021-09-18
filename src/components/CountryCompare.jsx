import React from "react";

const CountryCompare = (props) => {
 



  return (
    <div className="col-6 mt-5">
      {props && (
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-center">
              <h2>{props.country}</h2>
            </div>
            <div className="card-body d-flex flex-column">
              <div className="align-self-center">
                <img
                  src={props.countryInfo.flag}
                  alt="flag"
                  className="thumbnail rounded card-image"
                />
              </div>

              <div className="container">
                <div className="mt-3 fw-light">
                  <h5>Country Info</h5>

                  <p>Latitude: {props.countryInfo.lat}</p>
                  <p>Longitude: {props.countryInfo.long}</p>
                  <p>Continent: {props.continent}</p>
                  <p>Population: {props.population}</p>
                </div>
                <div className="mt-3 fw-light">
                  <h5>Country Today Covid-19 Info</h5>
                  <p>Deaths: {props.todayDeaths}</p>
                  <p>Cases: {props.todayCases}</p>
                  <p>Recovered: {props.todayRecovered}</p>
                </div>
                <div className="mt-3 fw-light">
                  <h5>Country Total Covid-19 Info</h5>
                  <p>Deaths: {props.deaths}</p>
                  <p>Critical: {props.critical}</p>
                  <p>Recovered: {props.recovered}</p>
                  <p>Tests: {props.tests}</p>
                </div>
                <div className="mt-3 fw-light">
                  <h5>Country Per 1 Mln Covid-19 Info</h5>
                  <p>Deaths: {props.deathsPerOneMillion}</p>
                  <p>Critical: {props.criticalPerOneMillion}</p>
                  <p>Recovered: {props.recoveredPerOneMillion}</p>
                  <p>Tests: {props.testsPerOneMillion}</p>
                </div>
                <div className="mt-3 fw-light">
                  <h5>Country 1 Per People Covid-19 Info</h5>
                  <p>Deaths: {props.oneDeathPerPeople}</p>
                  <p>Case: {props.oneCasePerPeople}</p>
                  <p>Tests: {props.oneTestPerPeople}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCompare;
