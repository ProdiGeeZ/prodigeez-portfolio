import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardHeader } from '../ui/card';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0001', 'template_hxm64hm', form.current, {
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
        <Card className="flex p-10 justify-center items-center flex-col w-full mx-auto my-8 shadow-lg rounded-lg">
            <CardHeader>
                <p className="text-4xl font-semibold text-left">Email Me Here!</p>
            </CardHeader>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 p-5 w-full'>
                <Label className="font-medium">Name</Label>
                <Input type="text" name="user_name" className="p-2 border rounded-md" />
                <Label className="font-medium">Email</Label>
                <Input type="email" name="user_email" className="p-2 border rounded-md" />
                <Label className="font-medium">Message</Label>
                <Textarea name="message" className="p-2 border rounded-md h-36" />
                <Button type="submit" className=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 ease-in-out">Send Message</Button>
            </form>
        </Card>
    );
};