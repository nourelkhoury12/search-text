import React, { useState, ChangeEvent } from "react";

function Search(){
    const [ searchText, setSearchText ] = useState<string>("");

    const text: string = "My Name is Nour";

    const getSearchTextHilights = (text: string, highlight: string) => {
        if (!highlight) return text;

        const regex = new RegExp(`(${highlight})`, "gi");
        const parts: (string | JSX.Element) [] = text.split(regex).map((part, i) => 
            regex.test(part) ? (
                <mark key={i} style={{ backgroundColor:" yellow"}}>
                    {part}
                </mark>
            ): (
                part
            )
        );

        return parts
    }

    const handleChangeText = (e : ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }
    
    return (
        <div>
            <h1>Search example</h1>
            <input type="text" placeholder="Search here ..." value={searchText} onChange={handleChangeText}/>
            <p>{getSearchTextHilights(text, searchText)}</p>
        </div>
    )
}

export default Search;