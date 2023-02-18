/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const inputNewFilm = document.querySelector ('.add');
    let deleteButton = document.querySelectorAll ('.delete');
    const filmList = document.querySelector('.promo__interactive-item');

    inputNewFilm.addEventListener('submit',addComplite );
    

    function addComplite () {
        let addFilm = document.querySelector('.adding__input').value;
        if (addFilm.length>21) {
            movieDB.movies.push (`${addFilm.slice(0,20)}...`);
let filmList2= filmList.cloneNode (true);
filmList.parentNode.append (filmList2);
filmList2.innerHTML=`${addFilm.slice(0,20)}...`+'<div class="delete"></div>';
deleteButton = document.querySelectorAll ('.delete');
deleteButton.forEach(function (element)  {
    element.addEventListener ('click', function () {
element.parentNode.remove();
    });
});
        } else {
        movieDB.movies.push (addFilm);}
        let filmList2= filmList.cloneNode(true);
        filmList.parentNode.append (filmList2);
filmList2.innerHTML=addFilm+'<div class="delete"></div>';
deleteButton = document.querySelectorAll ('.delete');
        console.log (movieDB.movies);deleteButton.forEach(function (element)  {
            element.addEventListener ('click', function () {
    element.parentNode.remove();
            });
        });
    }

    
    
});