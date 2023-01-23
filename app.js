let home = 0;
let away = 0;

function draw() {
    document.getElementById('home-score').innerText = (home)
    document.getElementById('away-score').innerText = (away)
}


function pointHome() {
    home++
    console.log('Home Score = ', home);
    draw()
}
function threePointHome() {
    home += 3
    console.log('Home Score = ', home);
    draw()
}
function pointAway() {
    away++
    console.log('Away Score = ', away);
    draw()
}
function threePointAway() {
    away += 3
    console.log('Away Score = ', away);
    draw()
}

function reset() {
    home = 0
    away = 0
    draw()

}