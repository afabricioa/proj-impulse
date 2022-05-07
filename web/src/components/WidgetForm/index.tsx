import { CloseButton } from "../CloseButton";

import bugImgUrl from '../../assets/bug.svg';
import ideaImgUrl from '../../assets/idea.svg';
import thoughtImgUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedBackTypes = {
    BUG: {
        title: 'Problema',
        source: bugImgUrl,
        alt: 'Imagem de um inseto'
    },
    IDEA: {
        title: 'Ideia',
        source: ideaImgUrl,
        alt: 'Imagem de uma lampada'
    },
    OTHER: {
        title: 'Outro',
        source: thoughtImgUrl,
        alt: 'Imagem de um balão de pensamento'
    }
};

export type FeedbackType = keyof typeof feedBackTypes; 
//typeof mostra todos os tipos e o tipo das propriedades
//keyof type mostra apenas as keys BUG | IDEA | OTHER

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false)
    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            handleRestartFeedback={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://nextlevelweek.com/">RocketSeat</a>
            </footer>
        </div>
    );
}