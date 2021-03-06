import React from 'react';
import {Spinner} from 'reactstrap';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers=[];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return(
        <div className='pagination'>
        <div className='arrows'>
            <p>&larr;</p>
        </div>
            {pageNumbers.map(number =>(
            <a onClick={()=> paginate(number)} href= {`#-${number}`} className='page-link'>
            {number}
            </a>
                ))}
        <div className='arrows'>
            <p>&rarr;</p>
        </div>
        </div>
    )
};

export default Pagination;