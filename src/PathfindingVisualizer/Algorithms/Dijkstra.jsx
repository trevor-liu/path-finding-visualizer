function Dijkstra(grid, startNode, endNode) {
    // first we need an empty array for returning node in ordered
    const visitedNode = [];
    startNode.distance = 0;
    // store all the unvisitedNode in an array
    const unvisitedNode = getAllNode(grid);

    // while loop when unvisitedNode is not empty
    while (!!unvisitedNode.length) {
        // sort the unvisitedNode
        unvisitedNode.sort((first, second) => first.distance - second.distance);
        // first we get the closest node to the last node
        const closestNode = unvisitedNode.shift();
        // add the closest node in visited node in ordered

        closestNode.isVisited = true;
        visitedNode.push(closestNode);
        // if the closest node = end node, return the visited node array
        if (closestNode === endNode) return visitedNode ;
        // find all the neigbours node to distance + 1
        // and set the neigbouring node pointed back to closest node
        updateNeighbourNodes(closestNode, grid);
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



function updateNeighbourNodes(node, grid) {
    const {col, row} = node;
    let neighbours = [];

    console.log(col);
    // get all unvisted neighbouring node
    if (row > 0) neighbours.push(grid[row-1][col]);
    if (row < grid.length - 1) neighbours.push(grid[row+1][col]);
    if (col > 0) neighbours.push(grid[row][col-1]);
    if (col < grid[0].length - 1) neighbours.push(grid[row][col+1]);
    neighbours = neighbours.filter(neighbour => !neighbour.isVisited);

    // update the unvisited neigbours' nodes' distance and previousNode
    for (const neighbour of neighbours) {
        neighbour.distance = node.distance + 1;
        neighbour.previousNode = node;
    }    
}


export default Dijkstra;