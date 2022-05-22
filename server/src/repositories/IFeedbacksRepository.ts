interface IFeedbackDTO{
    type: string;
    comment: string;
    screenshot?: Buffer;
}

interface IFeedbacksRepository{
    //interface - quais métodos existem dentro do repositório de feedbacks
    //quais ações a aplicação pode fazer com os feedbacks do BD.
    create: ({type, comment, screenshot}: IFeedbackDTO) => Promise<void>;
}

export { IFeedbackDTO, IFeedbacksRepository }