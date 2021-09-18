import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { totalDataFromApi } from "../actions/totalDataActions";
import ReactTooltip from "react-tooltip";
import Map2 from "./Map2";


const Home = (props) => {
  useEffect(() => {
    props.dispatch(totalDataFromApi());
  }, []);

  const [content, setContent] = useState("");


  return (
    <div>
      <div className="">
        <div className="d-flex flex-column">
          <h2 className="fs-3 fw-normal mt-5 mx-auto">
            Global Covid-19 Viewer App
          </h2>
          <p className="mt-5 mx-auto">
            This site contains latest Covid-19 data from every country
          </p>
          <h4 className="text-muted mt-5 mx-auto mb-5 ">Yesterday's Due</h4>
        </div>

        <div className="row text-muted ">
          <div className="card col-2 mx-auto">
            <div className="card-title fs-4">Total Deaths:</div>
            <div className="card-body fw-bold fs-3">
              {props.totalDatas.deaths}
            </div>
          </div>
          <div className="card col-2 mx-auto">
            <div className="card-title fs-4">Total Tests:</div>
            <div className="card-body fw-bold fs-3">
              {props.totalDatas.tests}
            </div>
          </div>
          <div className="card col-2 mx-auto">
            <div className="card-title fs-4">Total Recovered:</div>
            <div className="card-body fw-bold fs-3">
              {props.totalDatas.recovered}
            </div>
          </div>
          <div className="card col-2 mx-auto">
            <div className="card-title fs-4">Total Cases:</div>
            <div className="card-body fw-bold fs-3">
              {props.totalDatas.cases}
            </div>
          </div>
        </div>

        {/* <MapChart setTooltipContent= {setContent} ></MapChart>

        
        <ReactTooltip id="content">{content}</ReactTooltip> */}
        <Map2 setTooltipContent={setContent} countries = {props.countries} />

        <ReactTooltip html={true}>{content}</ReactTooltip>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalDatas: state.totalDatas,
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(Home);
