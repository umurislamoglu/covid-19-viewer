const countries = []


const covidReducer = (state =countries ,action) =>{

    switch(action.type){
        case "SET_COUNTRIES":
            
            return action.countries;
        
        case "SEARCH_COUNTRIES":

            return  action.countries;

      
       
        default:
            return state
    }
    
}

export default covidReducer;