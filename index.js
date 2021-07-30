import { teams, initSchedule } from './equipos.js'
import { Partido } from './Partido.js'

console.log('==============================================');
console.log('==== COMIENZO DE LA FASE DE ELIMINATORIAS ====');
console.log('==============================================');
var winners = [];
var winner;
console.log('==== OCTAVOS DE FINAL ====');
teams.forEach(match => {

    const resultadoLocal = Math.floor(Math.random() * (10 - 0) + 0);
    const resultadoVisitante = Math.floor(Math.random() * (10 - 0) + 0);
    if (resultadoLocal >= resultadoVisitante) {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.local}`);
        winner = match.local;
        winners.push(winner);
    } else {
        console.log(` ${match.visitante} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.visitante}`);
        winner = match.visitante;
        winners.push(winner);
    }
});


console.log('==== CUARTOS DE FINAL ====');

var rondas = winners.length / 2;
initSchedule(rondas); //


var teamIndexLocal = 0; // rellena
var maxHomeTeams = winners.length / 2 - 1;
var teamIndexVisitante = winners.length - 1;
var maxAwayTeams = winners.length / 2;

teams.forEach(match => {
    match.local = winners[teamIndexLocal];
    teamIndexLocal++;
    if (teamIndexLocal > maxHomeTeams) {
        teamIndexLocal = 0;
    }

});
teams.forEach(matchAway => {
    matchAway.visitante = winners[teamIndexVisitante]
    teamIndexVisitante--;
    if (teamIndexVisitante < maxAwayTeams) {
        teamIndexVisitante = 0;
    }
});

winners = [];
teams.forEach(match => {

    const resultadoLocal = Math.floor(Math.random() * (10 - 0) + 0);
    const resultadoVisitante = Math.floor(Math.random() * (10 - 0) + 0);
    if (resultadoLocal >= resultadoVisitante) {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.local}`);
        winner = match.local;
        winners.push(winner);
    } else {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.visitante}`);
        winner = match.visitante;
        winners.push(winner);
    }
});

console.log('==== SEMIFINALES ====');

rondas = winners.length / 2;
initSchedule(rondas); //
maxHomeTeams = winners.length / 2 - 1;
teamIndexVisitante = winners.length - 1;
maxAwayTeams = winners.length / 2;
teamIndexLocal = 0; // rellena



teams.forEach(match => {
    match.local = winners[teamIndexLocal];
    teamIndexLocal++;
    if (teamIndexLocal > maxHomeTeams) {
        teamIndexLocal = 0;
    }

});
teams.forEach(matchAway => {
    matchAway.visitante = winners[teamIndexVisitante]
    teamIndexVisitante--;
    if (teamIndexVisitante < maxAwayTeams) {
        teamIndexVisitante = 0;
    }
});

winners = [];
teams.forEach(match => {
    var winner;
    const resultadoLocal = Math.floor(Math.random() * (10 - 0) + 0);
    const resultadoVisitante = Math.floor(Math.random() * (10 - 0) + 0);
    if (resultadoLocal >= resultadoVisitante) {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.local}`);
        winner = match.local;
        winners.push(winner);
    } else {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.visitante}`);
        winner = match.visitante;
        winners.push(winner);
    }
});
console.log('==== FINAL ====');

rondas = winners.length / 2;
initSchedule(rondas); //
maxHomeTeams = winners.length / 2 - 1;
teamIndexVisitante = winners.length - 1;
maxAwayTeams = winners.length / 2;
teamIndexLocal = 0; // rellena



teams.forEach(match => {
    match.local = winners[teamIndexLocal];
    teamIndexLocal++;
    if (teamIndexLocal > maxHomeTeams) {
        teamIndexLocal = 0;
    }

});
teams.forEach(matchAway => {
    matchAway.visitante = winners[teamIndexVisitante]
    teamIndexVisitante--;
    if (teamIndexVisitante < maxAwayTeams) {
        teamIndexVisitante = 0;
    }
});

winners = [];
teams.forEach(match => {
    var winner;
    const resultadoLocal = Math.floor(Math.random() * (10 - 0) + 0);
    const resultadoVisitante = Math.floor(Math.random() * (10 - 0) + 0);
    if (resultadoLocal > resultadoVisitante) {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.local}`);
        winner = match.local;
        winners.push(winner);
    } else {
        console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.visitante}`);
        winner = match.visitante;
        winners.push(winner);
    }
});

console.log('==============================================');
console.log(`===== ${winners} GANADOR DE LA EURO 2020 =====`);
console.log('==============================================');