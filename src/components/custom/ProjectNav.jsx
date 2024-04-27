import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

function ProjectNav() {
    return (
        <header className="w-full overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start lg:flex-1">
                        <a href="/" className="flex items-center text-xl md:text-2xl font-bold text-primary transition-all">
                            <img src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/favicon.svg" alt="logo" width={50} className="p-0 m-0"/>
                            <p className=" pt-1">SAABIR.DEV</p>
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
