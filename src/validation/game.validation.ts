import * as Joi from 'joi'

const game_add_joi = Joi.object({
    name: Joi.string().required(),
    discription: Joi.string().required(),
    version: Joi.number().required()
}).unknown(true);

const id_joi = Joi.object({
    id: Joi.number().required()
}).unknown(true);


export{
    game_add_joi,
    id_joi
}