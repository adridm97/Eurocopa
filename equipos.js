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