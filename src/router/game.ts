import * as express from "express";
import { GameController } from "..";
import { createValidator } from "express-joi-validation";
import { game_add_joi, id_joi } from "../validation";
import { checkToken } from "../utils";
const validator = createValidator({ passError: true });

export const GameRoutes = (app: express.Application) => {
    app.get('/', checkToken, GameController.getAll);
    app.post('/add', checkToken, validator.body(game_add_joi), GameController.create);
    app.get('/:id', checkToken, validator.params(id_joi), GameController.getById);
    app.put('/:id', validator.params(id_joi), validator.body(game_add_joi), checkToken, GameController.update);
    app.delete('/:id', validator.params(id_joi), checkToken, GameController.delete);
};