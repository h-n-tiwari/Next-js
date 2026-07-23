"use client"

import { useState } from "react";
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";



export const NavBar = () => {
    console.log(`NavBar Rendered`);

    const [search, setSearch] = useState("");

    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}