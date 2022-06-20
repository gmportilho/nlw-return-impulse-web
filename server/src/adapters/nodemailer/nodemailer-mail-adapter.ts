import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7bb5bddd2dcef8",
        pass: "1c3c3229e4a9dd"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Portilho <gport@portilho.com>',
            to: 'Gabriel Portilho <gportilho@gmail.com>',
            subject,
            html: body,
        });
    }
}