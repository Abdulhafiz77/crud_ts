import * as express from "express";
import { GameController } from "..";
import { createValidator } from "express-joi-validation";
import { game_add_joi, id_joi } from "../validation";
const validator = createValidator({ passError: true });

export const GameRoutes = (app: express.Application) => {
    app.get('/', GameController.getAll);
    app.post('/add', validator.body(game_add_joi), GameController.create);
    app.get('/:id', validator.params(id_joi), GameController.getById);
    app.put('/:id', validator.params(id_joi), validator.body(game_add_joi), GameController.update);
    app.delete('/:id', validator.params(id_joi), GameController.delete);
};