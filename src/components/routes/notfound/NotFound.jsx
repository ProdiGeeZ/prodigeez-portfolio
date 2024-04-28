import NavBar from "@/components/custom/NavBar";
import { Button } from "@/components/ui/button";

function NotFound() {
    return (
        <>
            <NavBar />
            <div className="w-full max-w-screen h-[100vh] flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[70%] md:w-[40%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%]">
                    <h1 className="text-5xl font-bold text-center">Page Not Found.</h1>
                    <p className="text-base text-center pt-5 pb-0">Looks like we got a lil lost?</p>
                    <img src="https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/personal/scratching%20head.png?t=2024-04-28T02%3A35%3A02.348Z" className="w-full h-auto  rounded-lg mb-10" />
                    <Button variant="default" className="text-base">Back to Home</Button>
                </div>
            </div>
        </>
    )
}

export default NotFound;