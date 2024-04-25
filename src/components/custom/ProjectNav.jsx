import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

function ProjectNav() {
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
                    <NavigationMenu className="hidden md:flex items-center justify-end lg:w-0">
                        <NavigationMenuList className="flex space-x-8">
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

export default ProjectNav;
