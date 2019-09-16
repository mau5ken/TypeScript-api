import {Request, Response} from 'express';
export function helloworld (req: Request, res: Response) { 
    res.send('hello world ')
}