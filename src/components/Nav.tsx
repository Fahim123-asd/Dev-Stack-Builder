import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="sticky top-0">
            <div className="flex justify-between container mx-auto items-center py-3 px-3 my-4">
                <img src={logo} alt="Logo" />
                <ul className="flex gap-4">
                    <li className="text-[#db2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-6">
                    <button>Sign In</button>
                    <button className="btn btn-active bg-[#d91b7e] rounded-3xl text-white">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;