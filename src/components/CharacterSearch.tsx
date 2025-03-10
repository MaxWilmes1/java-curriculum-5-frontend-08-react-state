import CharacterGallery from "./CharacterGallery.tsx";
import {useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";

type Props = {
    characters: Character[]
    nextPage: () => void
    previousPage: () => void
}

export default function CharacterSearch(props: Props) {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <div>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters} nextPage={props.nextPage}
                                        previousPage={props.previousPage}/>
                    : <p>No characters found</p>
            }
        </div>
    )
}

