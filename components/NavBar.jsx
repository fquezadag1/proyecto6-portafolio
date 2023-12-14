import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export const NavBar = () => {
  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Link href='/'color="foreground"><p className="font-bold text-inherit">PORTAFOLIO</p></Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/about" color="foreground" underline="hover">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" underline="hover" color="foreground">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" underline="hover" color="foreground"  >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
