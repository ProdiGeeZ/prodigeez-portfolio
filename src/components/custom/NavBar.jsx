import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Link as Scroll } from 'react-scroll'
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from 'lucide-react';

function NavBar() {
    return (
        <header className="max-w-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center py-6 md:justify-start">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/" className="text-xl md:text-2xl font-bold text-primary transition-all" >
                            <span className="inline-flex p-0 m-0 items-center"><img src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/favicon.svg?t=2024-04-19T17%3A59%3A28.415Z" width={50} className="p-0 m-0" />
                                <p className="">SAABIR.DEV</p>
                            </span>
                        </a>
                    </div>
                    <div className="md:hidden flex space-x-2 ">
                        <ModeToggle />
                        <DropdownMenu className="w-full mr-10">
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem >
                                    <Link to="/projects">Projects</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem href="/contact">
                                    Contact Me
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <NavigationMenu className="hidden md:flex items-center justify-end lg:w-0">
                        <NavigationMenuList className="flex space-x-8">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/projects" className="text-base font-medium">
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className="text-base font-medium">
                                    <Scroll to="about" spy={true} href="/about" smooth={true} duration={500} className="text-base font-medium cursor-pointer self-center">
                                        About
                                    </Scroll>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant='default' href="/contact" className="transition ease-in-out">
                                <Scroll to="contact" spy={true} href="/about" smooth={true} duration={500}>
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
        </header>
    );
}

export default NavBar;
