import './App.css'

import {Route, Routes} from "react-router";
import CharacterSearch from "./components/CharacterSearch.tsx";

export default function App() {


    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/Home/Welcome"} element={<Home/>}></Route>
                <Route path={"/characters"} element={<CharacterSearch/>}></Route>
            </Routes>
        </div>

    )
}

import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
