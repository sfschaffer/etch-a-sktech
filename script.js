function incrementColor(str){
    //console.log(str);
    const re = /\d+\.?\d*/g;
    const nums = [...str.matchAll(re)];
    if(nums.length < 4){
        return "rgb(0,0,0)"
    }
    let aVal = parseFloat(nums[3][0]);
    let ans = aVal + .1;
    //console.log(`rgba(${nums[0][0]}, ${nums[1][0]}, ${nums[2][0]}, ${ans})`);
    return `rgba(${nums[0][0]}, ${nums[1][0]}, ${nums[2][0]}, ${ans})`;
}

function createGrid(dimensions = 16){
    let grid = document.querySelector(".grid");
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
    for(let i = 0; i < dimensions; i++){
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for(let j = 0; j < dimensions; j++){
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        }
        document.querySelector(".grid").appendChild(row);
    }

    const squares = document.querySelectorAll(".square");
    for(let i = 0; i < squares.length; i++){
        let square = squares[i]
        square.addEventListener("mouseover", function(e){
            let color = getComputedStyle(e.target).backgroundColor;
            //console.log(color);
            e.target.style.backgroundColor = incrementColor(color);
        });
    }
}

createGrid();

const btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
    let dims = prompt('Enter desired dimensions of grid');
    createGrid(dims);
});