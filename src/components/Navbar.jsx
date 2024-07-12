import React, { useEffect, useState } from "react";
import logo from "../assets/moviePlus-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../assets/profile-icon.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../navigation/navigation";

const Navbar = () => {
    const [searchInput, SetSearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
    }, [searchInput]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="fixed top-0 w-full h-16 bg-neutral-600 opacity-75 z-40">
            <div className="container mx-auto px-4 flex items-center h-full">
                <Link to={"/"}>
                    <img src={logo} alt="logo" width={120} />
                </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-1 ml-5">
                {navigation.map((nav, index) => {
                    return (
                        <div>
                            <NavLink
                                key={nav.label}
                                to={nav.href}
                                className={({ isActive }) =>
                                    `px-2 hover:text-neutral-200 ${
                                        isActive && "text-neutral-100"
                                    }`
                                }
                            >
                                {nav.label}
                            </NavLink>
                        </div>
                    );
                })}
            </nav>
            <div className="ml-auto flex items-center gap-5">
                <form
                    className="flex items-center gap-2"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
                        type="text"
                        placeholder="Search here..."
                        onChange={(e) => SetSearchInput(e.target.value)}
                        value={searchInput}
                    />
                    <button className="text-2xl text-white">
                        <IoSearchOutline />
                    </button>
                </form>
                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-75 transition-all">
                    <img src={userIcon} alt="" width="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
