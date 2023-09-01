import { useState } from 'react'



function Form({onSearchChange}) {
    
    const [search, setSearch] = useState("");
    const handleOnChange = (searchData) => {
        setSearch(searchData.target.value);
        onSearchChange(searchData.target.value);
    }

    return (
        <div>
            <h1>Search your city!</h1>
            <form>
                <input type="text" value={search} onChange={handleOnChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form