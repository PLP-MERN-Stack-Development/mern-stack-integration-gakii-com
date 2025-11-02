import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <Link to="/" className="font-bold text-lg">MERN Blog</Link>
            <div className="flex gap-3">
                {user ? (
                    <>
                        <Link to="/create">New Post</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
