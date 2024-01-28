import * as express from "express";
import { GameController } from "..";

export const GameRoutes = (app: express.Application) => {
    app.get('/', GameController.getAll);
    app.post('/add', GameController.create);
    app.get('/:id', GameController.getById);
    app.put('/:id', GameController.update);
    app.delete('/:id', GameController.delete);
};