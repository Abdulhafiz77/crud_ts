import express from 'express'
import http from 'http'
import { routes } from '.';

class ServerModule {

    private readonly host;
    private readonly port;
    private http;
    private app;

    constructor() {
        this.host = process.env.HOST;
        this.port = process.env.PORT;
        this.start();
    }

    private start() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        routes(this.app)
        this.http.listen(
            this.port,
            console.log(`Server listening on: http://localhost:${this.port}`)
        )
    }

}

new ServerModule();