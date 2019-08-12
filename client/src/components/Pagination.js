import React from 'react'

const Pagination = ({mediatorsPerPage,totalMediators}) => {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalMediators/mediatorsPerPage);i++){
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul>
            {pageNumber.map(number=>(

                <li key={number}>
                    <a href="#">
                    {number}
                    </a>
                </li>
            ))}

            </ul>
        </nav>
    )
}

export default Pagination
