import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

function LoadingScreen() {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [blink, setBlink] = useState(false);

    const images = [
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/dead%20battery.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/fetal%20position.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/jogging.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/laugh%20cry.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/ninja%20run.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/sleepy%20coffee.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/tough%20walk.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/homework.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/i%20hate%20homework.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/laptop%20cat.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/spit%20take.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/steam%20coming%20out%20your%20ears.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/rock.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/why.png',
        'https://waltibmozphnocxzjzxf.supabase.co/storage/v1/object/public/loading/bruh.png',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * images.length);
            } while (nextIndex === index);
            setIndex(nextIndex);
            setBlink(true);
            setTimeout(() => setBlink(false), 200);
        }, 250);

        return () => clearInterval(intervalId);
    }, [index, images.length]);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return oldProgress + 1.25;
            });
        }, 25);

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
