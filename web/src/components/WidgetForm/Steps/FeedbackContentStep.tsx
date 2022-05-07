import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentProps {
    feedbackType: FeedbackType;
    handleRestartFeedback: () => void;
    onFeedbackSent: () => void;
}
export function FeedbackContentStep(props: FeedbackContentProps){
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const feedbackTypeInfo = feedBackTypes[props.feedbackType]

    function handleSubmitForm(event: FormEvent){
        event.preventDefault()
        console.log(screenshot)
        console.log(comment)

        props.onFeedbackSent();
    }
    return (
        <>
            <header>
                <button onClick={props.handleRestartFeedback} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.source} alt={feedbackTypeInfo.alt} className="w-6 h-6"/>
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmitForm}>
                <textarea 
                    className="min-w[304px] w-full min-h[112px] text-sm placeholder-zinc-400 border-zinc-600 bg-transparent rounded-md"
                    placeholder="Explique com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot} 
                        onScreenshotTake={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={!comment}
                        className="p-2 bg-brand-500 rounded-sm border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}