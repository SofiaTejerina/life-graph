import graphService from '../services/graph.js';

class GraphController {
    getEdges(req, res, next) {
        try {
            const edges = graphService.getEdges();
            res.status(200).send(edges);
        } catch (err) {
            next(err);
        }
    }

    updateEdges(req, res, next) {
        try {
            const edges = req.body;
            graphService.updateEdges(edges);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }

    getNodes(req, res, next) {
        try {
            const nodes = graphService.getNodes();
            res.status(200).send(nodes);
        } catch (err) {
            next(err);
        }
    }

    updateNodes(req, res, next) {
        try {
            const nodes = req.body;
            graphService.updateNodes(nodes);
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    }

    getNextID(req, res, next) {
        try {
            const nextID = graphService.getNextID();
            res.status(200).send({ nextID });
        } catch (err) {
            next(err);
        }
    }
}

export default new GraphController();