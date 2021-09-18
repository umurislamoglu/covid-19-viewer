
    
  const  compareCountries = []



const compareReducer = (state =compareCountries ,action) =>{

    switch(action.type){
    
        case "COMPARE_COUNTRIES":
            
            
            return  action.compareCountries;
                
        case "CLEAR_COUNTRIES":

            return  []
       
        default:
            return state
    }
    
}

export default compareReducer;