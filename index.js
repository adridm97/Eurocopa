import { teams, initSchedule, inicializaPartido, setLocalTeams, setAwayTeams } from './equipos.js'
import { Partido } from './Partido.js'

console.log('==============================================');
console.log('==== COMIENZO DE LA FASE DE ELIMINATORIAS ====');
console.log('==============================================');
teams.forEach(team => {
    console.log(`${team.local} - ${team.visitante} `);
})
console.log('==== OCTAVOS DE FINAL ====');
var winners = [];
var winner;
//inicializaPartido();

juegaPartido();


console.log('==== CUARTOS DE FINAL ====');

var rondas = winners.length / 2;
initSchedule(rondas);

var teamIndexLocal = 0; // rellena
var maxHomeTeams = winners.length / 2 - 1;
var teamIndexVisitante = winners.length - 1;
var maxAwayTeams = winners.length / 2;
// setLocalTeams();
teams.forEach(match => {
    match.local = winners[teamIndexLocal];
    teamIndexLocal++;
    if (teamIndexLocal > maxHomeTeams) {
        teamIndexLocal = 0;
    }

});
// setAwayTeams();
teams.forEach(matchAway => {
    matchAway.visitante = winners[teamIndexVisitante]
    teamIndexVisitante--;
    if (teamIndexVisitante < maxAwayTeams) {
        teamIndexVisitante = 0;
    }
});

winners = [];
// inicializaPartido();
juegaPartido();

console.log('==== SEMIFINALES ====');

rondas = winners.length / 2;
initSchedule(rondas); //
maxHomeTeams = winners.length / 2 - 1;
teamIndexVisitante = winners.length - 1;
maxAwayTeams = winners.length / 2;
teamIndexLocal = 0; // rellena


// setLocalTeams();
teams.forEach(match => {
    match.local = winners[teamIndexLocal];
    teamIndexLocal++;
    if (teamIndexLocal > maxHomeTeams) {
        teamIndexLocal = 0;
    }

});
// setAwayTeams();
teams.forEach(matchAway => {
    matchAway.visitante = winners[teamIndexVisitante]
    teamIndexVisitante--;
    if (teamIndexVisitante < maxAwayTeams) {
        teamIndexVisitante = 0;
    }
});

winners = [];
// inicializaPartido();
juegaPartido();
console.log('==== FINAL ====');

rondas = winners.length / 2;
initSchedule(rondas); //
maxHomeTeams = winners.length / 2 - 1;
teamIndexVisitante = winners.length - 1;
maxAwayTeams = winners.length / 2;
teamIndexLocal = 0; // rellena

// setLocalTeams();

teams.forEach(match => {
    match.local = winners[teamIndexLocal];
    teamIndexLocal++;
    if (teamIndexLocal > maxHomeTeams) {
        teamIndexLocal = 0;
    }

});
// setAwayTeams();
teams.forEach(matchAway => {
    matchAway.visitante = winners[teamIndexVisitante]
    teamIndexVisitante--;
    if (teamIndexVisitante < maxAwayTeams) {
        teamIndexVisitante = 0;
    }
});

winners = [];
// inicializaPartido();
juegaPartido();

console.log('==============================================');
console.log(`===== ${winners} GANADOR DE LA EURO 2020 =====`);
console.log('==============================================');

function resultadoLocal() {
    var a = Math.floor(Math.random() * (10 - 0) + 0);
    return a;
}

function resultadoVisitante() {
    var a = Math.floor(Math.random() * (10 - 0) + 0);
    return a;
}

function juegaPartido() {
    teams.forEach(match => {
        var winner;
        do {
            var local = resultadoLocal();
            var visitante = resultadoVisitante();
        } while (local === visitante)

        if (local >= visitante) {
            console.log(` ${match.local} ${local} - ${visitante} ${match.visitante} => ${match.local}`);
            winner = match.local;
            winners.push(winner);
        } else {
            console.log(` ${match.local} ${local} - ${visitante} ${match.visitante} => ${match.visitante}`);
            winner = match.visitante;
            winners.push(winner);
        }
    });
}
