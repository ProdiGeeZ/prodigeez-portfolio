import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Link as Scroll } from 'react-scroll';
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from 'lucide-react';

function NavBar() {
    return (
        <header className="absolute w-full overflow-x-hidden">
            <nav>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start lg:flex-1">
                            <a href="/" className="flex items-center text-xl md:text-2xl font-bold text-primary transition-all">
                                <div className="logo-image transition-all duration-300 ease-in-out" style={{ width: 50, height: 50 }}></div>
                                <p className="ml-2 pt-1 hover:scale-[1.05] transition ease-in-out duration-200">SAABIR.DEV</p>
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 md:hidden">
                            <ModeToggle />
                            <DropdownMenu className="w-full">
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link to="/projects">Projects</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to="./cv.pdf" target="_blank">CV</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <NavigationMenu className="hidden md:flex items-center justify-end lg:w-0">
                            <NavigationMenuList className="flex space-x-8">
                                <NavigationMenuLink href="/projects" className="text-base font-medium hover-underline-animation" aria-label="navigate to projects page">
                                    Projects
                                </NavigationMenuLink>
                                <NavigationMenuItem className="text-base font-medium hover-underline-animation">
                                    <Scroll to="about" spy={true} smooth={true} duration={500} className="text-base font-medium cursor-pointer self-center" aria-label="scroll to about">
                                        About
                                    </Scroll>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/resume" target="_blank" className="text-base font-medium hover-underline-animation" aria-label="navigate to CV">
                                        CV
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Button variant='default' className="transition ease-in-out shine">
                                        <Scroll to="contact" spy={true} smooth={true} duration={500} aria-label="scroll to contact">
                                            Contact Me
                                        </Scroll>
                                    </Button>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <ModeToggle />
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
