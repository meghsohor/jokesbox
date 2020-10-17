import React from 'react';

const Search = ({searchTerm, setSearchTerm}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.value.trim();
        setSearchTerm(value);
    }

    return (
        <div className="search">
        <input type="text" name="search" aria-label="Search Jokes" 
            value={searchTerm} placeholder="Search: programming, dog, cat" 
            autoComplete="off" onChange={handleSearch}
        />
        </div>
    )
}

export default Search;