import React, { useState } from 'react';
// import { useQuery } from 'react-query';
import { usePaginatedQuery } from 'react-query';
import Planet from '../Planet/Planet';
import PageNumber from '../PageNumber/PageNumber';
import { PLANETS, ENDPOINT } from '../../utils/constants';

const fetchPlanets = async (key, page) => {
    const response = await fetch(`${ENDPOINT}/?page=${page}`);
    return response.json();
}

const Planets = () => {
    
    const [page, setPage] = useState(1);
    // const { data, status } = useQuery([PLANETS, page], fetchPlanets);
    const { 
        resolvedData,
        latestData,
        status 
    } = usePaginatedQuery([PLANETS, page], fetchPlanets);
 
    return (
        <>
            <h2>Planets</h2>
            {/* <PageNumber setPage={setPage}/>*/}
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
                <>
                    <section>
                        {resolvedData.results.map(planet => 
                            <article>
                                <Planet 
                                    key={planet.name}
                                    planet={planet}
                                />
                            </article>
                        )}
                    </section>
                </>
            )}
        </> 
    );
}
 
export default Planets;