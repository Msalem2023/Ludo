import { draw, move } from "./Home.js"



class player {
    constructor(color, position, homeEnd, map) {
        this.color = color
        this.position = position
        this.homeEnd = homeEnd
        this.map = map
    }
    getPosiition() {
        draw(this.color, this.position)
    }
    getHomeEnd() {
        draw(this.color, this.homeEnd)
    }
    getMove() {
        console.log(this.color)
        move(this.position, this.map)
    }

}
let red = [{ x: 12, y: 8 }, { x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }, { x: 8, y: 9 }, { x: 8, y: 10 }, { x: 8, y: 11 }, { x: 8, y: 12 }, { x: 8, y: 13 }, { x: 7, y: 13 }, { x: 6, y: 13 }, { x: 6, y: 12 }, { x: 6, y: 11 }, { x: 6, y: 10 }, { x: 6, y: 9 }, { x: 6, y: 8 }, { x: 5, y: 8 }, { x: 4, y: 8 }, { x: 3, y: 8 }, { x: 2, y: 8 }, { x: 1, y: 8 }, { x: 1, y: 7 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 8, y: 2 }, { x: 8, y: 3 }, { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 9, y: 6 }, { x: 10, y: 6 }, { x: 11, y: 6 }, { x: 12, y: 6 }, { x: 13, y: 6 }, { x: 13, y: 7 }, { x: 13, y: 8 },{ x: 12, y: 7 }, { x: 11, y: 7 }, { x: 10, y: 7 }, { x: 9, y: 7 }, { x: 8, y: 7 }]
let yellow = [{ x: 8, y: 2 }, { x: 8, y: 3 }, { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 9, y: 6 }, { x: 10, y: 6 }, { x: 11, y: 6 }, { x: 12, y: 6 }, { x: 13, y: 6 }, { x: 13, y: 7 }, { x: 13, y: 8 }, { x: 12, y: 8 }, { x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }, { x: 8, y: 9 }, { x: 8, y: 10 }, { x: 8, y: 11 }, { x: 8, y: 12 }, { x: 8, y: 13 }, { x: 7, y: 13 }, { x: 6, y: 13 }, { x: 6, y: 12 }, { x: 6, y: 11 }, { x: 6, y: 10 }, { x: 6, y: 9 }, { x: 6, y: 8 }, { x: 5, y: 8 }, { x: 4, y: 8 }, { x: 3, y: 8 }, { x: 2, y: 8 }, { x: 1, y: 8 }, { x: 1, y: 7 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 8, y: 1 },{ x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }]
let green = [{ x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 8, y: 2 }, { x: 8, y: 3 }, { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 9, y: 6 }, { x: 10, y: 6 }, { x: 11, y: 6 }, { x: 12, y: 6 }, { x: 13, y: 6 }, { x: 13, y: 7 }, { x: 13, y: 8 }, { x: 12, y: 8 }, { x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }, { x: 8, y: 9 }, { x: 8, y: 10 }, { x: 8, y: 11 }, { x: 8, y: 12 }, { x: 8, y: 13 }, { x: 7, y: 13 }, { x: 6, y: 13 }, { x: 6, y: 12 }, { x: 6, y: 11 }, { x: 6, y: 10 }, { x: 6, y: 9 }, { x: 6, y: 8 }, { x: 5, y: 8 }, { x: 4, y: 8 }, { x: 3, y: 8 }, { x: 2, y: 8 }, { x: 1, y: 8 }, { x: 1, y: 7 }, { x: 1, y: 6 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }]
let blue = [{ x: 6, y: 12 }, { x: 6, y: 11 }, { x: 6, y: 10 }, { x: 6, y: 9 }, { x: 6, y: 8 }, { x: 5, y: 8 }, { x: 4, y: 8 }, { x: 3, y: 8 }, { x: 2, y: 8 }, { x: 1, y: 8 }, { x: 1, y: 7 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 }, { x: 6, y: 5 }, { x: 6, y: 4 }, { x: 6, y: 3 }, { x: 6, y: 2 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 8, y: 2 }, { x: 8, y: 3 }, { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 9, y: 6 }, { x: 10, y: 6 }, { x: 11, y: 6 }, { x: 12, y: 6 }, { x: 13, y: 6 }, { x: 13, y: 7 }, { x: 13, y: 8 }, { x: 12, y: 8 }, { x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }, { x: 8, y: 8 }, { x: 8, y: 9 }, { x: 8, y: 10 }, { x: 8, y: 11 }, { x: 8, y: 12 }, { x: 8, y: 13 }, { x: 7, y: 13 }, { x: 6, y: 13 },{ x: 7, y: 12 }, { x: 7, y: 11 }, { x: 7, y: 10 }, { x: 7, y: 9 }, { x: 7, y: 8 }]
let positionOfPlayer1 = [{ x: 2, y: 2 }, { x: 2, y: 4 }, { x: 4, y: 2 }, { x: 4, y: 4 }]
let positionOfplayer2 = [{ x: 2, y: 10 }, { x: 2, y: 12 }, { x: 4, y: 10 }, { x: 4, y: 12 }]
let positionOfplayer3 = [{ x: 10, y: 2 }, { x: 10, y: 4 }, { x: 12, y: 2 }, { x: 12, y: 4 }]
let positionOfplayer4 = [{ x: 10, y: 10 }, { x: 10, y: 12 }, { x: 12, y: 12 }, { x: 12, y: 10 }]
let homeEnd1 = [{ x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 6, y: 7 }]
let homeEnd2 = [{ x: 7, y: 12 }, { x: 7, y: 11 }, { x: 7, y: 10 }, { x: 7, y: 9 }, { x: 7, y: 8 }]
let homeEnd3 = [{ x: 7, y: 2 }, { x: 7, y: 3 }, { x: 7, y: 4 }, { x: 7, y: 5 }, { x: 7, y: 6 }]
let homeEnd4 = [{ x: 12, y: 7 }, { x: 11, y: 7 }, { x: 10, y: 7 }, { x: 9, y: 7 }, { x: 8, y: 7 }]

let player1 = new player("green", positionOfPlayer1, homeEnd1, green)
let player2 = new player("blue", positionOfplayer2, homeEnd2, blue)
let player3 = new player("yellow", positionOfplayer3, homeEnd3, yellow)
let player4 = new player("red", positionOfplayer4, homeEnd4, red)


player2.getPosiition()
player3.getPosiition()
player4.getPosiition()
player1.getPosiition()
player1.getHomeEnd()
player2.getHomeEnd()
player3.getHomeEnd()
player4.getHomeEnd()
// player2.getNumber()



function handlePlayerMove() {
    let currentPlayer = document.getElementById("player").innerHTML.trim();
    switch (currentPlayer) {
        case "red":
            console.log("red");
            player4.getMove();
            document.getElementById("player").innerHTML = "yellow";
            break;
        case "yellow":
            player3.getMove();
            document.getElementById("player").innerHTML = "blue";
            break;
        case "blue":
            console.log("blue");
            player2.getMove();
            document.getElementById("player").innerHTML = "green";
            break;
        case "green":
            console.log("green");
            player1.getMove();
            document.getElementById("player").innerHTML = "red";
            break;
        default:
            console.log("Invalid player color");
            break;
    }
}
    document.getElementById("button").addEventListener("click",()=>{        
       handlePlayerMove();

    })
        
function number() {
    const max = 6
    let button = document.getElementById('button');
    button.onclick = () => {
        let result = Math.floor(Math.random() * max) + 1;
        localStorage.setItem("value", result)
        return document.getElementById('text').value = result;

    }

}
number()














