function Dijkstra(grid, startNode, endNode) {
    // first we need an empty array for returning node in ordered
    const visitedNode = [];
    
    // store all the unvisitedNode in an array
    const unvisitedNode = getAllNode(grid);

    // while loop when unvisitedNode is not empty
    while (unvisitedNode.length > 0) {
        // sort the unvisitedNode
        unvisitedNode.sort((first, second) => second.distance - first.distance);
        // first we get the closest node to the last node
        const closestNode = unvisitedNode.shift();
        // add the closest node in visited node in ordered
        visitedNode.push(closestNode);
        // if the closest node = end node, return the visited node array
        if (closestNode === endNode){ return visitedNode };
        // find all the neigbours node to distance + 1
        // and set the neigbouring node pointed back to closest node
        changeNeighbourNodes(closestNode, grid);
    }
}


function getAllNode(grid) {
    const allNode = []
    for (let i = 0; i < grid.length; i++) {
        for (let j= 0; j < grid[i].length; j++) {
            allNode.push(grid[i][j]);
        }  
    }
    return allNode;
}


function changeNeighbourNodes(node, grid) {
    const {col, row} = node;
    const neighbours = [];
    if (row > 0) neighbours.push(grid[row-1][col]);
    if (row < grid.length - 1) neighbours.push(grid[row+1][col]);
    if (col > 0) neighbours.push(grid[row][col-1]);
    if (col < grid[row].length - 1) neighbours.push(grid[row][col+1]);

    // change the unvisited neigbours' node
    neighbours.filter(neighbour => !node.isVisited);
    for (const neighbour of neighbours) {
        neighbour.distance = node.distance + 1;
        neighbour.previousNode = node;
    }    
}

export default Dijkstra;