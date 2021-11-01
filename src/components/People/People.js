import React, { useState }  from 'react';
import { usePaginatedQuery } from 'react-query';
import Person from '../Person/Person';
import PageNumber from '../PageNumber/PageNumber';
import { PEOPLE, ENDPOINT_PEOPLE } from '../../utils/constants';

const fetchPeople = async (key, page) => {
    const response = await fetch(`${ENDPOINT_PEOPLE}/?page=${page}`);
    return response.json();
}

const People = () => {
    
    const [page, setPage] = useState(1);
    const { 
        resolvedData,
        latestData,
        status 
    } = usePaginatedQuery([PEOPLE, page], fetchPeople);

    return (
        <>
            <h2>People</h2>
            <PageNumber 
                page={page}
                setPage={setPage}
                latestData={latestData}
            />
            {status === 'error' && (
                <section>
                    Error retrieving data
                </section>
            )}
            {status === 'loading' && (
                <section>
                    Loading data...
                </section>
            )}
            {status === 'success' && (
                <section>
                    {resolvedData.results.map(person => 
                        <article>
                            <Person 
                                key={person.name}
                                person={person}
                            />
                        </article>
                    )}
                </section>
            )}
        </> 
    );
}
 
export default People;