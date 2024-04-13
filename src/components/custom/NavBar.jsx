import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";

function NavBar() {
    return (
        <header className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/" className="text-xl font-bold text-primary hover-secondary :hover-bg-secondary">
                            SAABIR.DEV
                        </a>
                    </div>
                    <NavigationMenu className="flex items-center justify-end md:flex-1 lg:w-0">
                        <NavigationMenuList className="flex space-x-8">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/projects" className="text-base font-medium">
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/about" className="text-base font-medium">
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant='outline' href="/contact">Contact Me</Button>
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
