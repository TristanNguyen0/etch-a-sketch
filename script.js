//define important global variables
const containerWidth = containerHeight = 860;
const container = document.querySelector('.container');

function createGrid(width, height){
    for(let h=0;h<height;h++){
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.width = containerWidth;
        container.appendChild(row);
        for(let w=0;w<width;w++){
            let elem = document.createElement('div');
            elem.classList.add('row-element');
            elem.style.width = containerWidth/width;
            elem.style.height = containerHeight/height;
            row.appendChild(elem);
        }
    }
}

createGrid(16,16);


const squares = document.querySelectorAll('.row-element');

squares.forEach((square)=>square.addEventListener("mouseover",()=>{square.style.cssText = "background-color: black;";}));