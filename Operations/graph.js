class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacentList[vertex2]) this.addVertex(vertex2);

        this.adjacentList[vertex1].push(vertex2);
        this.adjacentList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(v => v != vertex2);
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(v => v != vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacentList[vertex].length) {
            const adjacentVertex = this.adjacentList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacentList[vertex];
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};

        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacentList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
// graph.addEdge('C', 'D');

console.log(graph.adjacencyList);

console.log(graph.bfs('A'));
console.log(graph.bfs('B'));
console.log(graph.bfs('D'));