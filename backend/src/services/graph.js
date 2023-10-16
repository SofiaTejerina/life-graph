import dbClient from "../database/dbClient.js";

class GraphService {
    getEdges() {
        return dbClient.readJSON('edges')
    }

    updateEdges(edges) {
        dbClient.writeJSON('edges', edges)
    }

    getNodes() {
        return dbClient.readJSON('nodes')
    }

    updateNodes(nodes) {
        dbClient.writeJSON('nodes', nodes)
    }
}

export default new GraphService();
