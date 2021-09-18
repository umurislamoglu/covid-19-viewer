import axios from "axios"




export const countryComparison = (compareCountries) => ({
    type: "COMPARE_COUNTRIES",
    compareCountries

})

export const multipleCountries= (firstCompare,secondCompare) => {

    const doubleCountries = `${firstCompare},${secondCompare}`

    return(dispatch) =>{axios.request({
        method: 'GET',
        url: `https://corona.lmao.ninja/v2/countries/${doubleCountries}?yesterday=`,
       
      }).then (function (response) { 
        const compareCountries = []
        compareCountries.push(response.data[0])
        compareCountries.push(response.data[1])
         
          dispatch(countryComparison(compareCountries));
    }).catch(function (error) {
    alert("Country not found. ",error)
    });} 


}

export const clearCountryComparison = () => ({
  type: "CLEAR_COUNTRIES",
  

})