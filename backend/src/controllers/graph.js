import graphService from '../services/graph.js';

class GraphController {
    async getEdges(req, res, next) {
        try {
            const edges = graphService.getEdges();
            res.status(200).send(edges);
        } catch (err) {
            next(err);
        }
    }

    async updateEdges(req, res, next) {
        try {
            const edges = req.body;
            graphService.updateEdges(edges);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }

    async getNodes(req, res, next) {
        try {
            const nodes = graphService.getNodes();
            res.status(200).send(nodes);
        } catch (err) {
            next(err);
        }
    }

    async updateNodes(req, res, next) {
        try {
            const nodes = req.body;
            graphService.updateNodes(nodes);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }
}

export default new GraphController();