import React , {useState} from 'react'
import { connect } from 'react-redux'
import Country from './Country';
import { Pagination } from './Pagination';



const Countries = (props) => {

    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage] = useState(9)
    
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentCountries = props.countries.slice(indexOfFirstPost,indexOfLastPost)
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="mt-3">
            <div className="row">

                {
                   
                    props.countries!==undefined?
                    currentCountries.map((country ,idx)=>{
                       return <Country key={idx} {...country}/>
                    })
                    :null
                }
 
            </div>
            <div className="d-flex justify-content-center mt-3">
            <Pagination postPerPage={postPerPage} totalPosts={props.countries.length} paginate ={paginate}/>
            </div>
            
           
        </div>
    )
}


const mapStateToProps = (state) => {
   
return {
    
    countries : state.countries}
}
 export default connect(mapStateToProps)(Countries)
