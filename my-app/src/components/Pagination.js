import React from 'react';
import {Spinner} from 'reactstrap';

const Pagination = ({spellsPerPage, totalSpells, paginate}) => {
    const pageNumber=[];

    for(let i = 1; i <= Math.ceil(totalSpells / spellsPerPage); i++){
        pageNumber.push(i);
    }
    
    return(
        <nav>
            <ul>
                {pageNumber.map(number =>(
                    <li key={number} className='page-item'>
                        <a onClick={()=> paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Pagination;