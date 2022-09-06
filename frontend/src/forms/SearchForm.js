import React, {useState} from 'react';
const SearchForm = ({search}) => {
    const [searchFor,setSearchFor] = useState('');
    const handleChange = evt => {
        evt.preventDefault();
        setSearchFor(evt.target.value);
        console.log(searchFor);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        search(searchFor);
        setSearchFor('');
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                name="search"
                placeholder='enter search here'
                onChange={handleChange}
                value={searchFor}
            />
        <button>Search</button>
        </form>
    )
}
export default SearchForm;