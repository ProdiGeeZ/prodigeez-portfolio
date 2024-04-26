/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mails } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

function Contact() {
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [progress, setProgress] = useState(0);
    const form = useRef();

    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

    const validateForm = () => {
        const currentForm = form.current;
        let tempErrors = {};
        let isValid = true;
        if (!currentForm['user_name'].value) {
            isValid = false;
            tempErrors['user_name'] = 'Name is required';
        }
        if (!currentForm['user_email'].value) {
            isValid = false;
            tempErrors['user_email'] = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(currentForm['user_email'].value)) {
            isValid = false;
            tempErrors['user_email'] = 'Email is invalid';
        }
        if (!currentForm['message'].value) {
            isValid = false;
            tempErrors['message'] = 'Message is required';
        }
        setErrors(tempErrors);
        return isValid;
    };

    const sendEmail = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        setSending(true);
        setProgress(30);
        emailjs.sendForm('main_service', 'default_forwarding', form.current, {
            publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        })
            .then(response => {
                console.log('Email successfully sent!', response.status, response.text);
                let currentProgress = 30;
                const interval = setInterval(() => {
                    const increment = (100 - currentProgress) / 10;
                    currentProgress += increment > 1 ? increment : 1;
                    setProgress(currentProgress);
                    if (currentProgress >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            setSent(true);
                            form.current.reset();
                            setSending(false);
                            setProgress(0);
                            setErrors({});
                        }, 500);
                    }
                }, 30);
            }, error => {
                console.log('Failed to send email:', error.text);
                alert('Failed to send message: ' + error.text);
                setSending(false);
                setProgress(0);
            });
    };

    return (
        <div className="container w-full min-h-screen flex flex-col justify-center items-center overflow-auto py-4">
            <div className="flex flex-col gap-4 justify-center items-center w-full px-4 text-center">
                <div className="inline-flex gap-2 justify-center items-center">
                    <span className="inline-flex justify-center items-center gap-1">
                        <Mails size={45} />
                        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 pt-4'>Drop me a Message!</h1>
                    </span>
                </div>
                <p className="text-md sm:text-base md:text-lg lg:text-2xl">
                    Any questions or ideas, or just want to say hello? I'm here!
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 lg:px-20 gap-4">
                <div className="flex flex-col w-full max-w-md lg:max-w-lg mx-auto">
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 p-4 md:p-6 lg:p-8'>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label className="font-medium">Name</Label>
                            <Input type="text" name="user_name" className="border-2 border-foreground/45 shadow-md rounded-md p-2" placeholder="Your Name" />
                            {errors.user_name && <p className="text-red-500 text-xs">{errors.user_name}</p>}
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label htmlFor="email" className="font-medium">Email</Label>
                            <Input type="email" id="email" name="user_email" className="border-2 border-foreground/45 shadow-md rounded-md p-2" placeholder="Your Email" />
                            {errors.user_email && <p className="text-red-500 text-xs">{errors.user_email}</p>}
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <Label className="font-medium">Message</Label>
                            <Textarea name="message" className="border-2 border-foreground/45 shadow-md rounded-md p-2 h-36" placeholder="Your message here" />
                            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                        </div>
                        {sending && <Progress value={progress} className="w-full" />}
                        {sent && isObjectEmpty(errors) &&
                            <div className="p-4 mx-auto bg-green-100 rounded-lg border border-green-200 shadow-sm flex items-center justify-between">
                                <p className="text-green-800 text-sm md:text-base">
                                    Thanks for your message! I'll get back to you soon! 👍
                                </p>
                            </div>
                        }
                        {!sent && !sending && <Button
                            type="submit"
                            className="font-bold rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out w-full md:w-2/3 lg:w-1/3 mx-auto mt-4 shadow-md hover:shadow-lg"
                            disabled={sent}
                        >
                            Send Message
                        </Button>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;