import {Link} from "react-router";

export default function Header(){
    return (
        <div>
            <Link to={"/Home/Welcome"}>Home</Link>
            <Link to={"/characters"}>Character Gallery</Link>
        </div>
    )
}