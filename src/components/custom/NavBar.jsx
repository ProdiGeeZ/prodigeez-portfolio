import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Link as Scroll } from 'react-scroll'
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from 'lucide-react';

function NavBar() {
    return (
        <header className="absolute w-full overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start lg:flex-1">
                        <a href="/" className="flex items-center text-xl md:text-2xl font-bold text-primary transition-all">
                            <img src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/favicon.svg" alt="logo" width={50} />
                            <p className="ml-2 pt-1">SAABIR.DEV</p>
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
                                <DropdownMenuItem href="/contact">
                                    Contact Me
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <NavigationMenu className="hidden md:flex items-center justify-end lg:w-0">
                        <NavigationMenuList className="flex space-x-8">
                            <NavigationMenuLink href="/projects" className="text-base font-medium">
                                    Projects
                                </NavigationMenuLink>
                            <NavigationMenuItem>
                                <Scroll to="about" spy={true} smooth={true} duration={500} className="text-base font-medium cursor-pointer self-center">
                                    About
                                </Scroll>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant='default' className="transition ease-in-out">
                                    <Scroll to="contact" spy={true} smooth={true} duration={500}>
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
