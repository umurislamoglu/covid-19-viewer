import React , {useState} from 'react'
import { connect } from 'react-redux'
import CountryDaily from './CountryDaily';
import { PaginationDaily } from './PaginationDaily';


const CountriesDaily = (props) => {
    
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage] = useState(16)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentCountries = props.countries.slice(indexOfFirstPost,indexOfLastPost)
    
   
   


    return (
        <div className="container mt-3">
            <div className="row">

                {
                    currentCountries.map((country ,idx)=>{
                        return <CountryDaily key={idx} {...country}/>
                    })
                }



              
            </div>
            <div className="d-flex justify-content-center mt-3">
            <PaginationDaily postPerPage={postPerPage} totalPosts={props.countries.length} paginate ={paginate}/>
            </div>
            
        </div>
    )
}


const mapStateToProps = (state) => {
   
return {
    
    countries : state.countries}
}
 export default connect(mapStateToProps)(CountriesDaily)
