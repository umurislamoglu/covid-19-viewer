import React, { useState } from "react";
import { connect } from "react-redux";
import { multipleCountries } from "../actions/compareDataActions";
import CountryCompare from "./CountryCompare";
import { clearCountryComparison } from "./../actions/compareDataActions";
import { Link } from "react-router-dom";


const CountriesCompare = (props) => {
  const [firstCompare, setFirstCompare] = useState("");

  const [secondCompare, setSecondCompare] = useState("");

  const onChangeFirst = (e) => {
    setFirstCompare(e.target.value);
  };
  const onChangeSecond = (e) => {
    setSecondCompare(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (firstCompare && secondCompare) {
      props.dispatch(multipleCountries(firstCompare, secondCompare));
      setFirstCompare("");
      setSecondCompare("");
    } else {
      alert("Please enter a country name to compare");
    }
  };

  const clearComparison = () => {
    props.dispatch(clearCountryComparison());
  };
  
 
 
  return (
    <div className="container mt-3">
      <div>
        <h3 className="fs-3 fw-normal mt-5">Compare Countries by total data</h3>
        <form onSubmit={onSubmit} className="mt-3">
          <div className="d-flex flex-row justify-content-between">
            <input
              id="compare 1"
              type="text"
              value={firstCompare}
              onChange={onChangeFirst}
              placeholder="Country 1"
              className="form-control m-2 "
            />
            <input
              id="compare 1"
              type="text"
              value={secondCompare}
              onChange={onChangeSecond}
              placeholder="Country 2"
              className="form-control m-2 "
            />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <button
              className="btn btn-secondary btn-md px-5 mt-3 "
              type="submit"
            >
              Compare
            </button>
          </div>
        </form>
        <div className="d-flex flex-row justify-content-center ">
          {" "}
          <button
            className="btn btn-danger btn-md px-5 mt-3 "
            onClick={clearComparison}
          >
            Delete
          </button>
        </div>

        <div className="container mt-3">
          <div className="d-grid">
            <div className="row">
            {props.compareCountries.map((compareCountry, idx) => {
              return <CountryCompare key={idx} {...compareCountry} />;
            })}
            
            </div>
            
              <Link to="/" className="d-grid gap-2"><button className="btn btn-primary mt-3 mb-5">Go Back</button></Link>
                
              
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    compareCountries: state.compareCountries,
  };
};

export default connect(mapStateToProps)(CountriesCompare);
