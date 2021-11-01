import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Navbar from './components/Navbar/Navbar';
import Planets from './components/Planets/Planets';
import People from './components/People/People';
import { PLANETS } from './utils/constants';

function App() {

  const [page, setPage] = useState(PLANETS);
  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage}/>
        <main className='content'>
          {page === PLANETS ? <Planets/>: <People/>}
        </main>
      </div>
    <ReactQueryDevtools initialIsOpen={false}/>
   </>
  );
}

export default App;
