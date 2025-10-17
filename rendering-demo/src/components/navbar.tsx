import { NavLinks } from "./navLinks";
import { NavSearch } from "./navSearch";

export const Navbar = () => {
    console.log("navbar rendered")
    return (
        <>
        <NavLinks />
        <NavSearch />
        </>
    )
}