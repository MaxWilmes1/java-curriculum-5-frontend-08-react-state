import {NavLink} from "react-router";

export default function Header(){
    return (
        <div>
            <NavLink to={"/Home/Welcome"}>Home</NavLink>
            <NavLink to={"/characters"}>Character Gallery</NavLink>
            <NavLink to={"/characters/add"}>Add Character</NavLink>
        </div>
    )
}