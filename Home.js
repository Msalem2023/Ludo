
export function draw(color, position) {
    for (let i = 0; i < position.length; i++) {
        const game = document.getElementById("Game")
        const body = document.createElement("div")
        body.style.gridColumnStart = position[i].x
        body.style.gridRowStart = position[i].y
        body.classList.add(`${color}`)
        body.classList.add("piece")
        body.style.backgroundColor = color
        game.appendChild(body)
    }
}

function nextMove(e, x, y, value, map) {
    setTimeout(() => {
        
        const element = map;
        let index = element.findIndex((ele) => ele.x === x && ele.y === y)
        let newPosition = element[index + value]
        e.target.style.gridColumnStart = newPosition.x
        e.target.style.gridRowStart = newPosition.y
    }, 0);

}

export function move(position, map, item) {
    console.log(map)
    const playerPieces = document.querySelectorAll('.piece');
    playerPieces.forEach(index => {
        index.addEventListener("click", function (e) {
            let newPlayer = ["red", "yellow", "blue", "green"]
            let currentPlayer = e.target.style.backgroundColor
            let x = parseInt(e.target.style.gridColumnStart)
            let y = parseInt(e.target.style.gridRowStart)
            let value = parseInt(localStorage.getItem("value"))
            let box = []
            if (value === 6) {
                return nextMove(e, x, y, value, map)
            } else {
                let boolian = map.find((ele) => ele.x === x && ele.y === y)
                if (boolian !== undefined) {
                    return nextMove(e, x, y, value, map)
                } else {

                    position.forEach(element => {
                        if (x === element.x && y === element.y) {
                            box.push(x)
                            if (box.length) {
                                alert("you need to get 6 to get it out ")

                            } else {

                                return nextMove(e, x, y, value, map)
                            }

                        }

                    })
                }
            }

            newPlayer.forEach(i => {
                if (i === currentPlayer) {
                    let find = newPlayer.findIndex((e) => e === i)
                    if (find === newPlayer.length - 1) {
                        document.getElementById("player").innerHTML = "red"
                        localStorage.setItem("Current", document.getElementById("player").innerHTML)
                    } else {
                        document.getElementById("player").innerHTML = newPlayer[find + 1]
                        localStorage.setItem("Current", document.getElementById("player").innerHTML)



                    }
                }

            });

        })



    })
}

