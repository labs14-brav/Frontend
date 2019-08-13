import React from 'react'

// styles
import './Pagination.scss'

const Pagination = ({mediatorsPerPage,totalMediators,paginate,currentPage}) => {
    const pageNumbers=[];


    console.log(currentPage,"currentPag")

    React.useEffect(() => {

    },[currentPage]);


    for(let i=1; i<=Math.ceil(totalMediators/mediatorsPerPage); i++){
        pageNumbers.push(i);
    }


   console.log(currentPage,"currentPage")

    return (
        <nav className="navBar">
            <ul className="unListNav">

            {pageNumbers.map(number=>{
                console.log(number,"number")
                 return (

                <li className="liNav" key={number}  >
                <a className={(currentPage === number ?'active':null)} onClick={()=>paginate(number)} >
                    {number}
                 </a>
                 </li>
            )})}

            </ul>
        </nav>
    )
}

export default Pagination


