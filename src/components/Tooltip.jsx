


const Tooltip = ({countryName,death,recovered}) => 
     (
        `<div>
        <p>${countryName}</p>
        <p>Total Death: ${death}</p>
        <p>Total Recovered: ${recovered}</p>
    </div>`
        
    )


export default Tooltip

