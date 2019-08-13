import React from 'react'

// styles
import './Pagination.scss'

const Pagination = ({mediatorsPerPage,totalMediators,paginate}) => {
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(totalMediators/mediatorsPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav className="navBar">
            <div className="unListNav">
            {pageNumbers.map(number=>(
                <div className="liNav" key={number}  >
                    <a className="anchorNum" onClick={()=>paginate(number)} >
                    {number}
                    </a>
                 </div>
            ))}

            </div>
        </nav>
    )
}

export default Pagination
