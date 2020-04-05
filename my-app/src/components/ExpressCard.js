import React from 'react';

const ExpressCard = ({character, current}) => {

    return(
        <section>
            {current.map(item =>(
                <div className='express-card'>
                    <h1>{item}</h1>
                </div>
            ))}
        </section>
    )
};

export default ExpressCard;