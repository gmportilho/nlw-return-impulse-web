import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRespository } from './respositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackService } from './services/submit-feedback-service';

export const routes = express.Router();




routes.post('/feedbacks,', async (req, res) =>{
    const {type, comment, screenshot} = req.body; //desestruturação de variável
    
    const prismaFeedbacksRespository = new PrismaFeedbacksRespository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();


    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbacksRespository, nodemailerMailAdapter);

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot,
    })

    

    return res.status(201).send;
})
