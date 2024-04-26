import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('main_service', 'default_forwarding', form.current, {
                publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Card className="flex justify-center items-center flex-col shadow-lg rounded-lg w-full">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 p-10 w-full'>
                <div className="inline-flex flex-row gap-10">
                    <span className="w-full">
                        <Label className="font-medium">Name</Label>
                        <Input type="text" name="user_name" className="border rounded-md" />
                    </span>
                    <span className="w-full">
                    <Label className="font-medium">Email</Label>
                        <Input type="email" name="user_email" className="border rounded-md" />
                    </span>
                </div>
                <Label className="font-medium">Message</Label>
                <Textarea name="message" className="border rounded-md h-36" />
                <Button type="submit" className=" font-bold rounded focus:outline-none focus:shadow-outline transition-colors duration-200 ease-in-out w-1/3 mx-auto mt-4">Send Message</Button>
            </form>
        </Card>
    );
};