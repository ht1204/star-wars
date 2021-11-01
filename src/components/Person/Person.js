import React from 'react';

const Person = ({ person }) => {

    const {name, gender, birth_year} = person;

    return (  
        <section className='card'>
            <h3>{name}</h3>
            <p>Gender: {gender} hab</p>
            <p>Birth Year: {birth_year}</p>
        </section>
    );
}
 

export default Person;