import React from 'react';
import { PLANETS, PEOPLE } from '../../utils/constants';

const Navbar = ({ setPage }) => {


    function handleBtnPlanetsOnClick() {
        setPage(PLANETS);
    }

    function handleBtnPeopleOnClick() {
        setPage(PEOPLE);
    }


    return (  
        <nav>
            <button onClick={handleBtnPlanetsOnClick}>
                Planets
            </button>
            <button onClick={handleBtnPeopleOnClick}>
                People
            </button>
        </nav>
    );
}
 
export default Navbar;