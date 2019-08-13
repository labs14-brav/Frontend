import React from 'react'

const Pagination = ({mediatorsPerPage,totalMediators,paginate}) => {
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(totalMediators/mediatorsPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul>
            {pageNumbers.map(number=>(

                <li style={{display:"inline",}} key={number}>
                    <a onClick={()=>paginate(number)} href="#">
                    {number}
                    </a>
                </li>
            ))}

            </ul>
        </nav>
    )
}

export default Pagination
