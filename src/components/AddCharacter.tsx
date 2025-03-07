import {Character} from "../types/RickAndMortyCharacter.ts";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router";

type Props = {
    addCharacter: (characterToAdd: Character) => void
}

export default function AddCharacter(props: Props) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()
    // const [newCharacter, setNewCharacter] = useState<Character>({id: "", name: ""})

    const onSaveClick = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("onSaveClick")
        const newCharacter = {id: id, name: name}
        props.addCharacter(newCharacter)
        navigate("/characters")
    }

    return (
        <form onSubmit={onSaveClick}>
            <input type="text" placeholder={"Enter id"} value={id} onChange={e => setId(e.target.value)}/>
            <input type="text" placeholder={"Enter name"} value={name} onChange={e => setName(e.target.value)}/>
            <button>Save</button>
        </form>
    )
}