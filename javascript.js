let grid = document.querySelector(".grid");

function CreateGrid(count) 
{
    if (grid == null)
    {
        return;
    }

    // Clear any existing squares
    grid.innerHTML = '';

    // Calculate square size (Container is 600px wide)
    const size = 600 / count;

    // Total squares = count × count 
    for (let i = 0; i < count * count; i++) 
    {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        //Each square remembers: its color, its darkness level
        square.dataset.opacity = 0;
        square.dataset.r = "";
        square.dataset.g = "";
        square.dataset.b = "";

        square.addEventListener("mouseover", () => {
            let opacity = Number(square.dataset.opacity);
            if (opacity === 0) {
                //Random colors
                square.dataset.r = Math.floor(Math.random() * 256);
                square.dataset.g = Math.floor(Math.random() * 256);
                square.dataset.b = Math.floor(Math.random() * 256);
            }

            if (opacity < 1) {
                //Each hover = +10%
                opacity += 0.1;
                square.dataset.opacity = opacity;
                const r = square.dataset.r;
                const g = square.dataset.g;
                const b = square.dataset.b;

                square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            }
        });

        grid.appendChild(square);
    }

    // for (let x = 0; x < gridSize; x++)
    // {
    //     let row = document.createElement("div");
    //     row.classList.add("row");
    //     grid.appendChild(row);

    //     for (let y = 0; y < gridSize; y++)
    //     {
    //         let column = document.createElement("div");
    //         column.classList.add("column");
    //         column.textContent = "square";
    //         row.appendChild(column);
    //     }
    // }
}

// Default grid
CreateGrid(16);