let gridSize = 16;
let grid = null;

window.onload=function()
{
    grid = document.querySelector(".grid");

        
    CreateGrid();
}

function CreateGrid() 
{
    for (let x = 0; x < gridSize; x++)
    {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        grid.appendChild(gridRow);

        for (let y = 0; y < gridSize; y++)
        {
            let gridColumn = document.createElement("div");
            gridColumn.classList.add("grid-column");
            gridColumn.textContent = "square";
            gridRow.appendChild(gridColumn);

            // let content = document.createElement("div");
            // content.classList.add("grid-square");
            // content.textContent = "square";
            // gridContainer.appendChild(content);
        }
    }
}