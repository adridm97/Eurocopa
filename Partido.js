import { teams } from './equipos.js'
export class Partido {
    constructor(nameLocal, nameVisitante) {
        this.nameLocal = nameLocal;
        this.nameVisitante = nameVisitante;
    }

    juega() {
        teams.forEach(match => {
            const resultadoLocal = Math.floor(Math.random() * (10 - 0) + 0);
            const resultadoVisitante = Math.floor(Math.random() * (10 - 0) + 0);
            if (resultadoLocal >= resultadoVisitante) {
                console.log(` ${match.local} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.local}`);
                match.winner = match.local;
                console.log(match.winner);
            } else {
                console.log(` ${match.visitante} ${resultadoLocal} - ${resultadoVisitante} ${match.visitante} => ${match.visitante}`);
                match.winner = match.visitante;
                console.log(match.winner);
            }
        });

    }

    setLocalTeams() {
        const teamNames = teams.map(team => team.winner); // array de nombres de los equipos
        let teamIndex = 0; // rellena
        const maxHomeTeams = teams.length / 2 - 1; // rellenamos los locales por ronda

        // teams.length === 16 (depende de la ronda)
        // debemos rellenar x espacios para los locales

        teams.forEach(match => {
            match.winner = teamNames[teamIndex];
            teamIndex++;
            if (teamIndex > maxHomeTeams) {
                teamIndex = 0;
            }
        })
    }


    setAwayTeams() {
        const teamNames = teams.map(team => team.winner); // array de nombres de los equipos
        let teamIndex = teams.length; // rellenamos a traves de la segunda mitad
        const maxAwayTeams = teams.length / 2; //llegamos hasta la ultima posicion

        // teams.length === 16
        // debemos rellenar 8 espacios para los visitantes

        teams.forEach(match => {
            match.away = teamNames[teamIndex];
            teamIndex++;
            if (teamIndex > maxAwayTeams) {
                teamIndex = 0;
            }
        })
    }
}