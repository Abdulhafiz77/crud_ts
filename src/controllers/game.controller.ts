import { Request, Response } from 'express'
import { GameRepository } from '../repository';
import { GameModel } from '../models';


export class GameController {
    static async getAll(req:Request, res: Response) {
        try {
          let data = await GameRepository.getAll(req.query);
          res.status(200).json(data)
        } catch (error) {         
            res.status(500).send(console.log(error))
        }
    }
    static async getById(req: Request, res: Response) {
        try {

            let data = await GameRepository.getById(req.params.id);
            return res.send(data);
        } catch (error) {
            return res.send(console.log(error)
            );
        }
    }
    static async create(req: Request, res: Response) {
        try {

            const data = await GameRepository.create(req.body)
            return res.send(data);

        } catch (error) {
            res.send(console.log(error))
        }
    }
    static async update(req: Request, res: Request) {
        try {
            req.body.id = req.params.id;
        
            let data = await GameRepository.update(req.body);

            return res.send({succes: true});
        } catch (error) {
            return res.send(console.log(error)
            )
        }
    }
    static async delete(req: Request, res: Response) {
        try {

            await GameRepository.delete(req.params.id);

            return res.send({ success: true });

        } catch (error) {
            return res.send(console.log(error)
            );
        }
    }
}
