import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SearchTable from "./SearchTable";

const SearchBar = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const inputHandler = async (e) => {
        setInputText(e.target.value);
        console.log(inputText)
        if (inputText.length > 0)
            await fetch(`https://netdb-api.vercel.app/api/find/${inputText.toLowerCase().trim()}`)
                .then(res => res.json())
                .then(data => setResult(data))
                .catch(err => console.log(err))
        else {
            setResult([]);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (result.length > 0)
            navigate(`/title/${result[0].show_id}`)
    }

    const focusHandler = () => setIsFocused(true);
    const blurHandler = () => {
        setTimeout(() => setIsFocused(false), 2000);
    }

    return (
        <div style={{ float: 'right', transform: 'translateY(-30px)' }}>
            <form onSubmit={submitHandler}>
                <label className="search-label">FIND A FILM</label>
                <input
                    className="search-input"
                    type="text"
                    onChange={inputHandler}
                    value={inputText}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
            </form>
            <SearchTable isFocused={isFocused} movies={result} />
        </div>
    );
}

export default SearchBar