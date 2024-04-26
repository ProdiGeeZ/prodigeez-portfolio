/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mails } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function Contact() {
    const [sent, setSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('main_service', 'default_forwarding', form.current, {
                publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
            })
            .then(
                () => {
                    alert('Message successfully sent!');
                    setSent(true)
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send message: ' + error.text);
                },
            );
    };
    return (
        <div className="container w-full min-h-screen flex flex-col justify-center items-center overflow-auto py-4">
            <div className="flex flex-col gap-4 justify-center items-center w-full px-4 text-center">
                <div className="inline-flex gap-2 justify-center items-center">
                    <span className="inline-flex justify-center items-center gap-1">
                        <Mails size={45} />
                        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-4 pt-4'>Drop me a Message!</h1>
                    </span>
                </div>
                <p className="text-sm md:text-base lg:text-2xl">
                    Got a question or proposal, or just want to say hello? Go ahead.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 lg:px-20 gap-4">
                <div className="flex flex-col w-full max-w-md lg:max-w-lg mx-auto">
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 p-4 md:p-6 lg:p-8'>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label className="font-medium">Name</Label>
                            <Input type="text" name="user_name" className="border rounded-md p-2" placeholder="Your Name" />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="email" className="font-medium">Email</Label>
                            <Input type="email" id="email" name="user_email" className="border rounded-md p-2" placeholder="Your Email" />
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label className="font-medium">Message</Label>
                            <Textarea name="message" className="border rounded-md p-2 h-36" />
                        </div>
                        <Button
                            type="submit"
                            className="font-bold rounded focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 ease-in-out w-full md:w-2/3 lg:w-1/3 mx-auto mt-4"
                            disabled={sent ? true : false}
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;