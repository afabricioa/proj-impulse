import  nodemailer from 'nodemailer';
import { MailUtil, SendMailData } from "../mail-util";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "284ee295b1d352",
        pass: "7b8384f031048e"
    }
});

export class NodeMailerMailUtil implements MailUtil {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe RAV <fabricio.a.s@hotmail.com>',
            to: 'Fabricio Teste <fabricio.a.s@hotmail.com>',
            subject,
            html: body
        });  
    };
}