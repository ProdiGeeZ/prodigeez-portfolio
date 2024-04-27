import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

function ProjectNav() {
    return (
        <header className="w-full overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start lg:flex-1">
                        <a href="/" className="flex items-center text-xl md:text-2xl font-bold text-primary transition-all duration-300 ease-in-out">
                        <div className="logo-image transition-all duration-300 ease-in-out" style={{ width: 50, height: 50 }}></div>
                            <p className="ml-2 pt-1 hover:scale-[1.05] transition ease-in-out duration-200">SAABIR.DEV</p>
                        </a>
                    </div>
                    <div className="flex items-center justify-end lg:w-0">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-8">
                                <NavigationMenuItem>
                                    <ModeToggle />
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ProjectNav;
