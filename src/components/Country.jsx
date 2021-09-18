import React from 'react'
import { Link } from "react-router-dom";

const Country = (props) => {
    return (
        <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="card mt-3">

            <h3 className="card-header d-flex flex-row"><span className="align-self-center">{props.country}</span></h3>
            <div className="card-body">
                <p className="d-flex flex-row">Deaths: <span className="badge bg-danger p-2 ms-auto col-6">{props.deaths}</span>   </p>
                <p className="d-flex flex-row">Critical: <span className="badge bg-warning text-dark ms-auto  col-6">{props.critical}</span>   </p>
                <p className="d-flex flex-row">Confirmed cases: <span className="badge bg-secondary ms-auto  col-6">{props.cases}</span>   </p>
                <p className="d-flex flex-row">recovered: <span className="badge bg-success ms-auto  col-6" >{props.recovered}</span>   </p>
            </div>

            <div className="card-footer d-flex flex-row">
                <button className="btn btn-primary col-5 m-auto"><Link to={`/latest/${props.country}`} className="text-white text-decoration-none">See Details</Link></button>
                <button className="btn btn-secondary col-5 m-auto"><Link to={`/latest/map/${props.country}`} className="text-white text-decoration-none">Map View</Link></button>
            </div>


            </div>
         
        </div>
    )
}

export default Country
