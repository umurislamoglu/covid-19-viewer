
import axios from "axios"



export const setCountries =(countries) => ({
    type: "SET_COUNTRIES",
    countries

})

export const getCountriesFromApi = () => {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://corona.lmao.ninja/v2/countries?yesterday=&sort=',
           
          }).then(function (response) {
            
            const countries = []
            response.data.forEach((country) => { countries.push(country)})
            
            dispatch(setCountries(countries));

          

        }).catch(function (error) {
            console.error(error);
        });

        
    }
}

export const searchCountries =(countries) => ({
    type: "SEARCH_COUNTRIES",
    countries

})


export const searchCountriesfromApi = (keyword) => {
        return(dispatch) =>{axios.request({
            method: 'GET',
            url: `https://corona.lmao.ninja/v2/countries/${keyword}?yesterday=true&strict=true&${keyword}=`,
           
          }).then (function (response) { 
            const countries = []
            countries.push(response.data)
             
              dispatch(searchCountries(countries));
    }).catch(function (error) {
        alert("Country not found. ")
    });} 

}



