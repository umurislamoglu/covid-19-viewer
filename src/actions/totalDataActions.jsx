import axios from "axios"



export const totalDatas = (totalDatas) => ({
    type: "SET_TOTAL",
    totalDatas

})

export const totalDataFromApi = () => {

    return(dispatch) => {axios.request({
            method: 'GET',
            url: `https://corona.lmao.ninja/v2/all?yesterday=`,
           
          }).then(function (response) {
           
           
            
            dispatch(totalDatas(response.data));
    
        }).catch(function (error) {
            console.error(error);
        })


    }
   
}
