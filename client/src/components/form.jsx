import { useState } from 'react'



function Form() {
    
    const search = ({onSearchChange}) => {
        const [search, setsearch] = useState("");
        const handleOnChange = (searchData) => {
            setsearch(searchData)
            onSearchChange(searchData)
        }
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