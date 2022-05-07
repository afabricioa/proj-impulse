import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps{
    screenshot: string | null;
    onScreenshotTake: (screenshot: string | null) => void;
}

export function ScreenshotButton(props: ScreenshotButtonProps){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png');

        props.onScreenshotTake(base64image)
        setIsTakingScreenshot(false)
    }

    if(props.screenshot){
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400"
                onClick={() => props.onScreenshotTake(null)}
                style={{
                    backgroundImage: `url(${props.screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180
                }}
            >
                <Trash weight="fill"/>
            </button>
        )
    }
    return (
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zing-700 transition-colors"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}
        </button>
    )
}