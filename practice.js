let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms=="" || numberOfFilms==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start ();

const personalMoviDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



function rememberMyFilms () {
    for (let i=0; i<2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', '');
        const b = prompt ('На сколько оцените его?', '');
    
        if (a !==null && b !==null && a !=='' && b !=='' && a.length < 50) {
            personalMoviDB.movies[a]=b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}

rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMoviDB.count <10) {
        console.log ('Просмотрено довольно мало фильмов');
    } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
        console.log ('Вы классический зритель');
    } else if (personalMoviDB.count >= 30 ) {
        console.log ('Вы киноман');
    } else  {
        console.log ('Произошла ошибка');
    }
}

detectPersonalLevel ();

function showMoviDB (hidden) {
    if (!hidden) {
        console.log (personalMoviDB);
    }
}



function writeYourGanres () {
    for (let i=0; i<3; i++) {
        personalMoviDB.genres[i]= prompt (`Ваш любимый жанр номер ${i+1} ?`, '');
    }

    showMoviDB (personalMoviDB.privat);
}
writeYourGanres ();

