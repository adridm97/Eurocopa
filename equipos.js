export let teams = [{
        local: 'Spain',
        visitante: 'Sweden'

    },
    {
        local: 'Netherlands',
        visitante: 'Portugal'
    },
    {
        local: 'Belgium',
        visitante: 'Greece'
    },
    {
        local: 'Russia',
        visitante: 'Italy'
    },
    {
        local: 'Germany',
        visitante: 'Ireland'
    },
    {
        local: 'Finland',
        visitante: 'Poland'
    },
    {
        local: 'Austria',
        visitante: 'Switzerland'
    },
    {
        local: 'Serbia',
        visitante: 'Norway'
    }
]
export const initSchedule = (rondas) => {
    teams = [];
    const numberOfMatchDays = rondas; // numero de jornadas
    // numero de partidos por jornada

    for (let i = 0; i < numberOfMatchDays; i++) {
        const match = { local: 'Home', visitante: 'Away' }; // match ===> partido
        teams.push(match);

        // ya tenemos todos los partidos de una jornada
        // añadimos la jornada a la planificación
    }

}
export const inicializaPartido = () => {
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
}
var winners = [];
var winner;
var teamIndexLocal = 0; // rellena
var maxHomeTeams = winners.length / 2 - 1;
var teamIndexVisitante = winners.length - 1;
var maxAwayTeams = winners.length / 2;
export const setLocalTeams = () => {
    teams.forEach(match => {
        match.local = winners[teamIndexLocal];
        teamIndexLocal++;
        if (teamIndexLocal > maxHomeTeams) {
            teamIndexLocal = 0;
        }

    });
}
export const setAwayTeams = () => {
    teams.forEach(matchAway => {
        matchAway.visitante = winners[teamIndexVisitante]
        teamIndexVisitante--;
        if (teamIndexVisitante < maxAwayTeams) {
            teamIndexVisitante = 0;
        }
    });
}