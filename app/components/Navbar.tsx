import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className="flex items-center">
                <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
            </div>
        </nav>
    );
};

export default Navbar;