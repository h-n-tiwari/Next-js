import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";



export const NavBar = () => {
    console.log(`NavBar Rendered`);


    return (
        <div>
            <NavLinks />
            <NavSearch />
        </div>
    )
}