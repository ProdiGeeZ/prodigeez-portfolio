/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { insertEmail } from "../../../supabase/API";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { toast } from "sonner"; 

function Footer() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;
        if (email.trim() === '') {
            isValid = false;
            tempErrors['user_email'] = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            tempErrors['user_email'] = 'Email is invalid';
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleInsert = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
            insertEmail(email)
                .then((result) => {
                    setLoading(false);
                    if (result.error) {
                        toast(result.error, {
                            description: result.error,
                            action: {
                                label: "OK",
                            },
                        });
                    } else {
                        toast("Subscription successful", {
                            description: "Thanks for subscribing!",
                            action: {
                                label: "OK",
                                onClick: () => console.log("Toast closed"),
                            },
                        });
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    toast("Failed to subscribe", {
                        description: "An error occurred while subscribing. Please try again later.",
                        action: {
                            label: "OK",
                            onClick: () => console.log(error),
                        },
                    });
                });
        }
    }
    

    return (
        <React.Fragment>
            <Separator className="max-w-screen mt-10" />
            <section className="bg-background overflow-hidden max-w-screen">
                <div className="sm:px-10 w-full p-5 grid grid-cols-1 xl:grid-cols-2 justify-between items-center overflow-hidden">
                    <div className="w-full/2 px-4 my-0 mx-auto flex flex-col justify-center space-y-4 overflow-hidden sm:px-6 lg:px-8">
                        <p className="text-2xl font-semibold flex justify-center items-center lg:w-full">I Might Start a Blog?</p>
                        <p className="text-base flex text-center">I may occasionally write about the personal projects I'm working on. If you're bored...join!</p>
                        <form>
                            <span className="inline-flex gap-2 w-full">
                                <Input type="email" id="email" name="user_email" className="border-2 border-foreground/45 shadow-md rounded-md p-2" placeholder="Your Email" onChange={(event) => setEmail(event.target.value)} />
                                <Button disabled={loading} onClick={handleInsert}>{loading ? 'Subscribing...' : 'Subscribe'}</Button>
                            </span>
                                {errors.user_email && <p className="text-red-500 text-sm pt-2">{errors.user_email}</p>}
                        </form>
                    </div>
                    <div className="w-full overflow-hidden sm:px-6  flex flex-col">
                        <p className="text-2xl font-semibold flex justify-center pt-5 xl:items-end">Useful Links</p>
                        <nav className="flex xl:flex-col justify-center items-center ">
                            <div className="px-4 py-2">
                                <a href="/" className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                                    Home
                                </a>
                            </div>
                            <div className="px-4 py-2">
                                <a href="/projects" className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                                    Projects
                                </a>
                            </div>
                            <div className="px-4 py-2">
                                <a href="/cv.pdf" target="_blank" className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                                    CV
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <Separator className="max-w-screen mt-1" />
                <p className=" text-xs sm:text-base text-center text-gray-400 p-2 py-4 pt-4">
                    © 2024 Saabir.dev, Inc. All rights reserved.
                </p>
            </section>
        </React.Fragment>
    )
}

export default Footer;
