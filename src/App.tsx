import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";
import './App.css'
import {Route, Routes} from "react-router";
import CharacterSearch from "./components/CharacterSearch.tsx";
import AddCharacter from "./components/AddCharacter.tsx";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";

export default function App() {

    const [characters, setCharacter] = useState<Character[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        loadCharacters()
    }, [page])

    const addCharacter = (characterToAdd: Character) => {
        console.log("add Character")
        setCharacter([...characters, characterToAdd])
        console.log(characters)
    }

    const loadCharacters = () => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                setCharacter(response.data.results)
            })
            .catch(errorResponse => {
                console.log(errorResponse)
            })
    }

    const previousPage = () => {
        if (page > 1) setPage(prevPage => prevPage - 1)
    }
    const nextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/Home/Welcome"} element={<Home/>}></Route>
                <Route path={"/characters"} element={<CharacterSearch characters={characters} nextPage={nextPage}
                                                                      previousPage={previousPage}/>}></Route>
                <Route path={"/characters/add"} element={<AddCharacter addCharacter={addCharacter}/>}></Route>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}></Route>
            </Routes>
        </div>

    )
}