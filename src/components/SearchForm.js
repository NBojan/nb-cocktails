import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchInput = useRef();

    const settingInput = () => setSearchTerm(searchInput.current.value);

    useEffect(() => {
        searchInput.current.focus();
    }, [])

    return (  
        <div className="smallContainer m-auto mt-48 mb-48">
            <form className="searchForm" onSubmit={e => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="term" className="capitalize">Search your favourite cocktail</label>
                    <input type="text" id="term" ref={searchInput} onChange={settingInput}/>
                </div>
            </form>
        </div>
    );
}
 
export default SearchForm;