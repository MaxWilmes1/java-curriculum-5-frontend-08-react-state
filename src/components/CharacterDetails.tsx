import {useParams} from "react-router";
import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterDetailsProps = {
    characters: Character[]
}

export default function CharacterDetails(props: CharacterDetailsProps) {
    const params = useParams()
    const character: Character | undefined  =  props.characters.find(e => e.id.toString() === params.id)

    if (character === undefined){
        return (
            <div>
                <p>Character not found</p>
            </div>
        )
    }

    return (
        <div>
            <p>Details {params.id}</p>
            <CharacterCard character={character}/>
        </div>
    )
}