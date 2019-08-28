/**
 *  Dependencies
 */

import React from 'react'

/**
 * Import styles
 */

import './styles/Pagination.scss'

/**
 * Define component
 */

const Pagination = ({mediatorsPerPage, totalMediators, paginate,currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMediators/mediatorsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <nav className="navBar">
            <ul className="unListNav">
                {pageNumbers.map(number => {
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

/**
 * Export component
 */

export default Pagination
