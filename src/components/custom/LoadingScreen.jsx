import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

const images = [
    './1.svg', './2.svg', './3.svg', './4.svg', './5.svg',
    './6.svg', './7.svg', './8.svg', './9.svg', './10.svg',
    './11.svg', './12.svg', './13.svg', './14.svg', './15.svg'
];

function LoadingScreen() {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * images.length);
            } while (nextIndex === index);
            setIndex(nextIndex);
            setBlink(true);
            setTimeout(() => setBlink(false), 200);
        }, 350);  

        return () => clearInterval(intervalId);
    }, [index]);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(oldProgress => {
                const newProgress = oldProgress + 1.25;
                if (newProgress >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return newProgress;
            });
        }, 20);

        return () => clearInterval(progressInterval);
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[350px] h-auto flex flex-col justify-center items-center">
                <img src={images[index]} className={`w-[300px] h-auto ${blink ? 'blink' : ''}`} alt="Loading image" />
                <p className="text-4xl font-bold text-animate py-2">Loading...</p>
                <Progress value={progress} className="w-full mt-2" />
            </div>
        </div>
    );
}

export default LoadingScreen;
