import React from 'react';

const PageNumber = ({ page, setPage,latestData }) => {
    // const pages = [1,2,3];
    // const itemsPages = [];

    // for (const [index, value] of pages.entries()) {
    //     itemsPages.push(<button onClick={() => setPage(value)}>{value}</button>)
    // }
    // return (
    //     <section className='page-number'>
    //         {itemsPages}
    //     </section>
    // );
    
    return (
        <section className='page-number'>
            <button
                onClick={() => setPage(previousPage => Math.max(previousPage - 1, 1))}
                disabled={page === 1}
            >
                Previous Page
            </button>
            { page }
            <button
                onClick={() => setPage(previousPage => (!latestData || !latestData.next ? previousPage : previousPage + 1))}
                disabled={!latestData || !latestData.next}
            >
                Next Page
            </button>
        </section>
    );
}

export default PageNumber;