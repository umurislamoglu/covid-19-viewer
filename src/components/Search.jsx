import React,{ useState} from "react";
import "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { searchCountriesfromApi , getCountriesFromApi} from "../actions/covidDataActions";



const Search = (props) => {



  const[keyword,setKeyword] = useState("")
  
  const onChange =(e) => {
    setKeyword(e.target.value);
    
    
  }

  const onSubmit = (e)=> {
      e.preventDefault();
      if(!keyword){
        props.dispatch(getCountriesFromApi())
     
        
      }else{
        props.dispatch(searchCountriesfromApi(keyword))
      setKeyword("")
        
      }
     
  }
 

  

  return (
<form onSubmit={onSubmit}>
      <div className="d-flex flex-row">
        
          <input type="text" value={keyword} onChange={onChange} className="form-control col-md-3 rounded-pill" placeholder="Search"  />
        <div className="input-group-append">
          {/* <button type="submit" className="btn btn-secondary">
            <i className="fas fa-search"></i>
          </button> */}
        </div>
        
        
      </div></form>
    
  );
};

const mapStateToProps = (state) => {
  return {
    countries:state.countries
  }
}

export default connect (mapStateToProps)(Search) ;
