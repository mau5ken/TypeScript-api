import {Request, Response} from 'express'

export function getPhotos(req: Request, res: Response){

}

export function createPhoto(req: Request, res: Response) {
    
    console.log('Guardando Foto')
    console.log(req.body)

    return res.json({
        message: 'Foto cargada Exitosamente'
    })
}