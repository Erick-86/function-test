//TASK 1
const calcAverage = (a, b, c) => (a + b + c) / 3

//TASK 2
let teamDolphines = calcAverage(44, 23, 71)
let teamKoala = calcAverage(65, 54, 49)
console.log(teamDolphines, teamKoala)

//TASK 3
function checkWinner(avgDolphinesScore, avgKoalaScore){
    if(avgDolphinesScore >= 2 * avgKoalaScore){
        console.log(`Dolphines won (${teamDolphines} vs. ${teamKoala})`)
    }else if(avgKoalaScore >= 2 * avgDolphinesScore){
        console.log(`Koalas won (${teamKoala} vs ${teamDolphines})`)
    }else{
        console.log(`No team won`)
    }
}

checkWinner(teamDolphines, teamKoala)
checkWinner(300, 111)


//TASK 4
teamDolphines = calcAverage(85, 54, 41)
teamKoala = calcAverage(23, 34, 27)
console.log(teamDolphines, teamKoala)
checkWinner(teamDolphines, teamKoala)