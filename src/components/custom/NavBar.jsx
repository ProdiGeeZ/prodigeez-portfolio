import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Menu } from 'lucide-react';
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Link } from 'react-scroll'

function NavBar() {
    return (
        <header className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6 md:justify-start">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/" className="text-xl md:text-2xl font-bold text-primary hover:text-[#ff3a2c] transition-all" style={{ textShadow: '0px 0px 3px rgba(255, 85, 85, 0.5)', 'hover': { textShadow: '2px 2px 15px 0 rgba(255, 85, 85, 0.9)' } }}>
                            SAABIR.DEV
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
                                <DropdownMenuItem href="/projects">
                                    Projects
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
                                <Link to="about" spy={true} smooth={true} duration={500} className="text-base font-medium cursor-pointer self-center">
                                    About
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant='default' href="/contact" className="hover:bg-[#fd8d8d] transition ease-in-out">Contact Me</Button>
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
