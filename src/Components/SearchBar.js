import searchIcon from "./Icons/search.svg"

const SearchBar = () => {
    return ( 
        <span className="searchbar-content">
            <span className="search">
                <input id="search-input" type="text"  placeholder="Search Work Order"/>
                <img id="magnifying-glass" src={searchIcon} alt="search" />
            </span>
        </span>
     );
}
 
export default SearchBar;