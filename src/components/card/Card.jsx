import React from 'react';


function Card({message, author, date}) {
    return (
        <div className="card">
            <p>{message}</p>
            <p>{author}</p>
            <p>{date}</p>
        </div>
    );
}


export default Card;