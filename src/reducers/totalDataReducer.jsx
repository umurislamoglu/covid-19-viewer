    
  const  totalDatas = []



  const totalDataReducer = (state =totalDatas ,action) =>{
  
      switch(action.type){
      
          case "SET_TOTAL":
              
              
              return  action.totalDatas;
                  
          
         
          default:
              return state
      }
      
  }
  
  export default totalDataReducer;