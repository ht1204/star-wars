import React from 'react';

const Planet = ({ planet }) => {

    const {name, population, terrain} = planet;

    return (  
        <section className='card'>
            <h3>{name}</h3>
            <p>Population: {population} hab</p>
            <p>Terrain: {terrain}</p>
        </section>
    );
}
 

export default Planet;