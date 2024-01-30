import { UNAUTHORIZED } from 'http-status-codes';
import {
     ValidatedRequest, StaffModel, ErrorEnum
} from '../models/index';
import redisService from './redis.service';
import { ErrorService } from './error.service';
import { JwtService } from './jwt.service';

export const checkToken = async (req: ValidatedRequest<any>, res, next) => {
    try {
        let authorization = null;
        if (req.headers && req.headers.authorization) {
            authorization = req.headers.authorization.split(' ')[1];
        }

        if (!authorization) return ErrorService.error(res, ErrorEnum.token, UNAUTHORIZED);

        const decode = await JwtService.verify(authorization);
        if (!decode) return ErrorService.error(res, ErrorEnum.Unauthorized, UNAUTHORIZED);

        const staff = await redisService.get<StaffModel>(String(decode.id), authorization);
        if (!staff) return ErrorService.error(res, ErrorEnum.Unauthorized, UNAUTHORIZED);
        else {
            req.staff = staff!;
            next();
        }

    } catch (error) {
        ErrorService.error(res, ErrorEnum.Unauthorized, UNAUTHORIZED)
    }
}

export const checkHeader = (req: ValidatedRequest<any>, res, next) => {
    try {

        if (!req.headers.language)
            req.headers.language = 'ru';
        req.query.language = req.headers.language;
        req.body.language = req.headers.language;

        next();
        
    } catch (error) {
        ErrorService.error(res, error, UNAUTHORIZED)
    }
};