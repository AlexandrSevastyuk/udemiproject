const personalMoviDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function () {
        personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
     
         while (personalMoviDB.count=="" || personalMoviDB.count==null || isNaN(personalMoviDB.count)) {
            personalMoviDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
         }
     },
    rememberMyFilms: function () {
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
     },
     detectPersonalLevel: function () {
        if (personalMoviDB.count <10) {
            console.log ('Просмотрено довольно мало фильмов');
        } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
            console.log ('Вы классический зритель');
        } else if (personalMoviDB.count >= 30 ) {
            console.log ('Вы киноман');
        } else  {
            console.log ('Произошла ошибка');
        }
    },
    showMoviDB: function (hidden) {
        if (!hidden) {
            console.log (personalMoviDB);
        }
    },
    writeYourGanres: function () {
       
            let genres =prompt (`Ведите ваши любимые жанры через запятую ?`, '');
            if (genres== null || genres == '') {
               console.log ('Вы ввели некорректные данные или не ввели их вообще!');
            } else {
                personalMoviDB.genres=genres.split (',') ;
                }
            
        personalMoviDB.genres.forEach(function (element, i)  {
            console.log (`Любимый жанр # ${i++ + 1} - это ${element}`);
            
        });
    
            },
    toggleVisibleMyDB: function () {
        if (personalMoviDB.privat) {
            personalMoviDB.privat = false;
        } else {
            personalMoviDB.privat = true;
        }
    }
};

