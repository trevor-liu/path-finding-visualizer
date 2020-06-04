function Greedy(grid, startNode, endNode) {
    const stack = [];
    manhattanDistance(startNode, endNode);
    stack.push(startNode);
    startNode.isVisited = true;
    console.log(startNode);
    const visitedNode = [];
    let currentNode = startNode; // use "let" instead of const for use to fix the bug below and declare it in the while loop
    while (!!stack.length) {
        sortingUnvisted(stack);
        currentNode = stack.shift();
        if (currentNode.isWall) continue;
        visitedNode.push(currentNode);
        if (currentNode === endNode) return visitedNode;
        
        // push neighbourNodes on the stack
        getNeighbourNodes(grid, currentNode, stack, endNode);
        
    }
    

    visitedNode.push(currentNode); // fix a bug where the last node won't filled in when trapped
    return visitedNode;
}

//---------------------------------------------------------------------- Helper function -------------------------------------------//

function sortingUnvisted(unvisitedNode) {
    unvisitedNode.sort((first, second) => 
        // only account for the distance from the endNode
        (first.distanceFromEndNode - second.distanceFromEndNode)
    )
}

function manhattanDistance(NodeA, endNode) {
    const {row: rowA, col: colA} = NodeA;
    const {row: rowB, col: colB} = endNode;

    NodeA.distanceFromEndNode = Math.abs(rowA-rowB) + Math.abs(colA-colB);
    return;
}

function getNeighbourNodes(grid, Node, stack, endNode) {
    const {row, col} = Node;

    // get right neightbours
    if (col < grid[0].length-1) {
        const right = grid[row][col+1];
        if (right.isVisited === false) {
            right.previousNode = Node;
            manhattanDistance(right, endNode);
            stack.push(right);
            right.isVisited = true;

        }
    }

    // get bottom neighbours
    if (row < grid.length-1) {
        const bottom = grid[row+1][col];
        if (bottom.isVisited === false) {
            bottom.previousNode = Node;
            manhattanDistance(bottom, endNode);
            stack.push(bottom);
            bottom.isVisited = true;

        }
    }

    // get left neightbours
    if (col > 0) {
        const left = grid[row][col-1];
        if (left.isVisited === false) {
            left.previousNode = Node;
            manhattanDistance(left, endNode);
            stack.push(left);
            left.isVisited = true;
 
        }
    }

    // get top neighbours
    if (row > 0) {
        const top = grid[row-1][col];
        if (top.isVisited === false) {
            top.previousNode = Node;
            manhattanDistance(top, endNode);
            stack.push(top);
            top.isVisited = true;
 
        }
    }
    
}
export default Greedy;