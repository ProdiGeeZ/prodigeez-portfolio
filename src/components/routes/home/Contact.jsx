/* eslint-disable react/no-unescaped-entities */
import { ContactUs } from "@/components/custom/ContactUs";

function Contact() {
    return (
        <div className="px-10 py-12 w-full mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-screen items-center">
            <div className="flex flex-col justify-center text-left p-10 ml-20 mx-auto">
                <h3 className='font-bold text-xl lg:text-2xl mb-4'> Drop me a Message! <span role="img" aria-label="Location"> 📍</span></h3>
                <p className="leading-relaxed text-base lg:text-lg">
                    If you would like to work with me, or require anymore information or help with any code related matters, feel free to reach out to me and we can have a conversation! I hope to hear from you!
                </p>
            </div>
            <div className="flex justify-center items-center p-5 lg:p-20">
                <div className="w-full h-auto flex flex-col justify-center items-center">
                    <ContactUs />
                </div>
            </div>
        </div>
    )
}

export default Contact;