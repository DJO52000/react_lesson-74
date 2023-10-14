import { NavLink } from "react-router-dom"

//GO AROUND REFRESH PAGE Y USE LINK
export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    {/* NavLink have automatically build in active link func., also can pass func inside*/}
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/store">Store</NavLink>
                </li>
                <li>
                    <NavLink to="/team" end>
                        Team
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
