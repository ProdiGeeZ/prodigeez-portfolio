/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { insertEmail } from "../../../supabase/API";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { toast } from "sonner";

function NewsletterForm({ setEmail, handleInsert, loading, errors }) {
    return (
        <form onSubmit={handleInsert}>
            <div className="inline-flex gap-2 w-full">
                <Input
                    type="email"
                    id="email"
                    name="user_email"
                    className="border-2 border-foreground/45 shadow-md rounded-md p-2 mb-2"
                    placeholder="Your Email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Button disabled={loading} type="submit">
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </Button>
            </div>
            {errors.user_email && <p className="text-red-500 text-sm pt-2">{errors.user_email}</p>}
        </form>
    );
}

function UsefulLinks() {
    return (
        <nav className="flex xl:flex-col justify-center items-center">
            <LinkItem href="/" text="Home" />
            <LinkItem href="/projects" text="Projects" />
            <LinkItem href="/cv.pdf" text="CV" target="_blank" />
        </nav>
    );
}

function LinkItem({ href, text, target }) {
    return (
        <div className="px-4 py-2">
            <a href={href} target={target} className="text-base leading-6 text-gray-500 hover-underline-animation hover:text-foreground transition ease-in-out duration-200">
                {text}
            </a>
        </div>
    );
}

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
        if (validateForm(email)) {
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
    };

    return (
        <>
            <footer>
                <Separator className="max-w-screen mt-10" />
                <section className="bg-background overflow-hidden max-w-screen">
                    <div className="sm:px-10 w-full p-5 grid grid-cols-1 xl:grid-cols-2 justify-between items-center overflow-hidden">
                        <div className="w-full px-4 my-0 mx-auto flex flex-col justify-center space-y-4 overflow-hidden sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-semibold flex justify-center items-center">Very Occasional Newsletter?</h2>
                            <p className="text-base text-center">I may occasionally write about the personal projects I'm working on. If you're bored...join!</p>
                            <NewsletterForm email={email} setEmail={setEmail} handleInsert={handleInsert} loading={loading} errors={errors} />
                        </div>
                        <div className="w-full overflow-hidden sm:px-6 flex flex-col">
                            <h3 className="text-2xl font-semibold flex justify-center pt-5 xl:items-end">Useful Links</h3>
                            <UsefulLinks />
                        </div>
                    </div>
                    <Separator className="max-w-screen mt-1" />
                    <div className="text-xs sm:text-base text-center text-gray-400 p-2 py-4">
                        © 2024 Saabir.dev, Inc. All rights reserved. (verbally)
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;
