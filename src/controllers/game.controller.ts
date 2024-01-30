import { Request, Response } from 'express'
import { GameRepository } from '../repository';
import { ErrorEnum, GameModel, PaginationParams, ValidatedRequestBody, ValidatedRequestQuery } from '../models';
import { ValidatedRequest } from 'express-joi-validation';
import { ErrorService, getPaginationResponse } from '../utils';


export class GameController {
    static async getAll(req: ValidatedRequest<ValidatedRequestQuery<PaginationParams>>, res) {
        try {

            let data = await GameRepository.getAll(req.body);
            return res.send(data);
        } catch (error) {
            return ErrorService.error(res, error);
        }
    }
    static async getById(req: ValidatedRequest<any>, res) {
        try {

            let data = await GameRepository.getById(req.params.id);
            return res.send(data);
        } catch (error) {
            return ErrorService.error(res, error);
        }
    }
    static async create(req: ValidatedRequest<ValidatedRequestBody<GameModel>>, res) {
        try {

            const data = await GameRepository.create(req.body)

            return res.send(data);

        } catch (error) {
            return ErrorService.error(res, error);
        }
    }
    static async update(req: ValidatedRequest<ValidatedRequestBody<GameModel>>, res) {
        try {
            req.body.id = req.params.id;

            let checkId = await GameRepository.getById(req.params.id);
            let data = await GameRepository.update(req.body);

            return res.send(data);
        } catch (error) {
            return ErrorService.error(res, error);
        }
    }

    static async delete(req: ValidatedRequest<any>, res) {
        try {

            await GameRepository.delete(req.params.id);

            return res.send({ success: true });

        } catch (error) {
            return ErrorService.error(res, error);
        }
    }
}
