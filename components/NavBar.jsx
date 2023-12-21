import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const NavBar = () => {
  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <Link href='/'color="foreground"><p className="font-bold text-inherit">PORTAFOLIO</p></Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/about" color="foreground" underline="hover">
            Sobre Mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" underline="hover" color="foreground">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" underline="hover" color="foreground"  >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
