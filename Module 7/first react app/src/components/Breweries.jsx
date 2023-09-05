import { useState, useEffect } from 'react';
import Pagination from './Pagination';

// Component which reads breweries data from an API and therefore may cause delay when rendering. Contains ++ extension suggestions
function Breweries() {

    // by default the list of breweries is empty and we're showing page 1 with no filters
    const [breweries, setBreweries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [filterType, setFilterType] = useState('')
    let isLoading = breweries.length === 0; // ++ use a reducer to store the list of breweries, the loading status, and any errors

    // once the component is definitely being rendered on screen, load in the API data
    // ++ move this out to a custom hook
    useEffect(() => {
        const filterParam = filterType === '' ? '' : '&by_type='+filterType;

        console.log('getting '+filterType+' breweries on page number '+currentPage)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page='+currentPage+filterParam)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData)
            setBreweries(jsonData)
        })  
    }, [currentPage, filterType]) // we want to re-run this when the page or the filter type change

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage)
    }

    const handleChangeFilter = (newFilter) => {
        setFilterType(newFilter)
    }    

    return (
        <div className="Breweries componentBox">
            <h2>Breweries</h2>

            {/* component to filter the list by brewery type */}
            {/* ++ add another component to filter by state, see https://www.openbrewerydb.org/documentation */}
            <TypeFilter selectedFilter={filterType} onFilterChange={handleChangeFilter}/>

            {/* ++ add another component to sort by title or state or type */}

            {isLoading ? <div>Loading breweries ...</div> : 
                <ul className="hideBullets">
                    { breweries.map(brewery => <Brewery key={brewery.id} {...brewery}/>) }
                </ul>
            }

            {/* paging in its own component */}
            <Pagination currentPage={currentPage} hasNextPage={breweries.length >= 50} onPageChange={handleChangePage} />

        </div>
    );
}

// component to handle display of a single brewery
function Brewery({id, name, brewery_type, state, country, website_url = ''}) {
    let moreInfo = website_url ? <a href={website_url} target="_blank">More Info...</a> : '';

    return (
        <li><a target="_blank" href={`https://api.openbrewerydb.org/breweries/${id}`}>{name}</a> is 
            a {brewery_type} brewery in {state}, {country} {moreInfo}</li>        
    )
}

function TypeFilter({selectedFilter, onFilterChange}) {

    let types = new Map([ // types and descriptions taken from API documentation at https://www.openbrewerydb.org/documentation
        ['micro', 'Most craft breweries. For example, Samual Adams is still considered a micro brewery.'],
        ['nano', 'An extremely small brewery which typically only distributes locally.'],
        ['regional', 'A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.'],
        ['brewpub', 'A beer-focused restaurant or restaurant/bar with a brewery on-premise.'],
        ['large', 'A very large brewery. Likely not for visitors. Ex. Miller-Coors.'],
        ['planning', 'A brewery in planning or not yet opened to the public.'],
        ['bar', 'A bar. No brewery equipment on premise.'],
        ['contract', 'A brewery that uses another brewery’s equipment.'],
        ['proprietor', 'Similar to contract brewing but refers more to a brewery incubator.'],
        ['closed','A location which has been closed.']
    ]);

    let options = [...types.keys()].map((type,index) => (
        <option value={type} key={index}>{type.charAt(0).toUpperCase().concat(type.substring(1))}</option>) // capitalised type displayed in select, lowercase version as value
    );

    return (
        <div className="TypeFilter">
            <select name="filterType" value={selectedFilter} onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">Choose an option</option>
                {options}
            </select>
            <p>{types.get(selectedFilter)}</p> {/* display the matching description for the selected filter type */}
        </div>
    )
}

// extension activity: choose a different API from the list at https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0 
// and implement either searching, sorting or paging (or all three!) keeping in mind the tips at https://react.dev/learn/thinking-in-react

// to export both a default component and some extras
// see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

export { Breweries as default, TypeFilter };