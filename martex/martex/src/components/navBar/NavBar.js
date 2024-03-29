import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/features">Features</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
};
export default NavBar;
