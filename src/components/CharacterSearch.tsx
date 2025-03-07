import CharacterGallery from "./CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "../Characters.ts";

export default function CharacterSearch() {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <div>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }
        </div>
    )
}

