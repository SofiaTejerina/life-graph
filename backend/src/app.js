import express from 'express';

import GraphRoutes from './routes/graph.js';
import ErrorHandlerMiddleware from "./middlewares/errorHandler.js";

const BASE_URI = '/api/v1';

class App {
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 80);
        this.app.use(ErrorHandlerMiddleware.handle);
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.useRoute('/graph', GraphRoutes);
    }

    useRoute(url, routes) {
        this.app.use(`${BASE_URI}${url}`, routes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.info(`Ready to serve requests on port ${this.app.get('port')}`);
    }
}

export default App;
