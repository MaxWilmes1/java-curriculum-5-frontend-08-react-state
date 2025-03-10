import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";

type CharacterGalleryProps = {
    characters: Character[];
    previousPage: () => void
    nextPage: () => void
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const cards = props.characters.map((character) => <CharacterCard key={character.id} character={character}/>);
    return (
        <div>
            <div className="character-gallery">
                {cards}
            </div>
            <button onClick={props.previousPage}>Previous page</button>
            <button onClick={props.nextPage}>Next page</button>
        </div>
    );
}
