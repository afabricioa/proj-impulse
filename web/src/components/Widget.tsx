import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

// biblioteca headlessio com o popover substitui o useState para o toggle visibilidade do Hello World
export function Widget() {
    return (
        <Popover className='absolute bottom-5 right-5 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            {/* group - definir um grupo para toda a estrutura do botão */}
            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className="w-6 h-6"/>
                {/* qualquer elemento que se sobrepor ao tamanho maximo(w-0) vai ficar escondido */}
                {/* ease-linear tempo de duração igual em toda a animação */}
                {/* group-hover quando hover no grupo definido(botão) acontece a transição */}
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}