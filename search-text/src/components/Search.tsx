import React, { useState, ChangeEvent } from "react";

function Search(){
    const [ searchText, setSearchText ] = useState<string>("");

    const text: string = "My Name is Nour Nour Nour";

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

    const getCountText = (text: string, highlight: string): any => {
        if (!highlight) return 0;
        const regex = new RegExp(highlight, "gi");
        return (text.match(regex) || []).length;
    }

    const handleChangeText = (e : ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }
    
    const matchCountText = getCountText(text, searchText)
    return (
        <div className="container">
            <h1 className="heading-one">Search example</h1>
            <input className="input-text" type="text" placeholder="Search here ..." value={searchText} onChange={handleChangeText}/>
            {searchText &&(
                <div>
                    {matchCountText} were found.{matchCountText !== 1 ? "es" : ""}
                </div>
            )}
            <p>{getSearchTextHilights(text, searchText)}</p>
        </div>
    )
}

export default Search;