import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";
import './App.css'
import {Route, Routes} from "react-router";
import CharacterSearch from "./components/CharacterSearch.tsx";
import {allCharacters} from "./Characters.ts";
import AddCharacter from "./components/AddCharacter.tsx";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";

export default function App() {

    const [characters, setCharacter] = useState(allCharacters)

    const addCharacter = (characterToAdd: Character) => {
        console.log("add Character")
        setCharacter([...characters, characterToAdd])
        console.log(characters)
    }

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/Home/Welcome"} element={<Home/>}></Route>
                <Route path={"/characters"} element={<CharacterSearch characters={characters}/>}></Route>
                <Route path={"/characters/add"} element={<AddCharacter addCharacter={addCharacter}/>} ></Route>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}></Route>
            </Routes>
        </div>

    )
}


