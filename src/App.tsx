import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";
import './App.css'
import {Route, Routes} from "react-router";
import CharacterSearch from "./components/CharacterSearch.tsx";
import {characters} from "./Characters.ts";

export default function App() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/Home/Welcome"} element={<Home/>}></Route>
                <Route path={"/characters"} element={<CharacterSearch/>}></Route>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}></Route>
            </Routes>
        </div>

    )
}


