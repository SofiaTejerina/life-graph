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

    // TODO: we should store this in a Redis database
    getNextID() {
        const nodes = this.getNodes()
        let maxID = 0
        for (const node of nodes) {
            maxID = Math.max(maxID, node.id)
            if (node.type === 'groupNode') {
                for (const { props: { id } } of node.data.props.data) {
                    maxID = Math.max(maxID, id)
                }
            }
        }
        return maxID + 1
    }
}

export default new GraphService();
