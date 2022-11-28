/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict"

const movieDB = {
  movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
}

const newGenre = document.createElement("div")
const renameGenre = document.querySelector(".promo__genre")
const changePoster = document.querySelector(".promo__bg")
const movieList = document.querySelector(".promo__interactive-list")

document.querySelectorAll(".promo__adv img").forEach((el) => el.remove())

newGenre.style.cssText =
  "font-weight: bold; font-size: 18px; line-height: 21px; color: #FFFFFF; text-transform: uppercase;"
newGenre.innerHTML = "Драма"
document.body.append(newGenre)

renameGenre.replaceWith(newGenre)

changePoster.style.cssText = "background: url(img/bg.jpg); background-repeat: no-repeat"

movieList.innerHTML = ""

movieDB.movies.sort()

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
	<li class="promo__interactive-item">
	${i + 1}. ${film}<br/>
  </li>
`
})
