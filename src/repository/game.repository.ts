import { GameModel } from './../models/game.model';
import { pgPoolQuery } from "..";

export class GameRepository {

    static async getAll(params: string): Promise<GameModel[]> {

        const parameters: any = [];
        const sql = `SELECT * FROM game;`

        const result = await pgPoolQuery(sql, parameters);

        return result.rows
    }
    static async getById(id: number): Promise<GameModel> {
        const sql = `SELECT 
        game.name, 
        game.discription,
        game.version,
        game.create_at,
        game.update_at
        FROM game 
        WHERE game.id = $1;`
        const result = await pgPoolQuery(sql, [id]);

        return result.rows[0]
    }
    static async create(params: GameModel): Promise<GameModel> {

        const sql = `
        INSERT INTO game (name, discription, version) VALUES ($1, $2, $3) RETURNING *;`
        const result = await pgPoolQuery(sql, [params.name, params.discription, params.version ]);

        return result.rows[0];
    }

    static async update(params: GameModel): Promise<GameModel> {

        const sql = `UPDATE game SET 
        name = $1,
        discription = $2,
        version = $3,
        update_at = NOW() WHERE id = $4;`

        const result = await pgPoolQuery(sql,
            [params.name,
            params.discription,
            params.version,
            params.id]);

        return result.rows[0];
    }

    static async delete(id: number): Promise<void> {
        const sql = `DELETE FROM game WHERE id = $1;`;
        await pgPoolQuery(sql, [id]);

    }
}