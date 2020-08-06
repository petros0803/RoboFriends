import React from 'react';
import './card.css';

const Card = (props) => {
    const {id, name, email} = props;
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'Robots' src = {`https://robohash.org/${id}`} width = '300px' height = '300px'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;