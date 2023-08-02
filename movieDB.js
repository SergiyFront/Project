const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
if(personalMovieDB.count < 10){
    console.log("Посмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <30 ){
    console.log("Вы клсический киноман")
}else if(personalMovieDB.count >=30 && personalMovieDB.count<= 60){
    console.log("Вы киноман");
}else{
    console.log("Eror");
}


for(let i = 0; i< 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if(a === "" || a == null || a.length > 50 ){
        i--;
    }
    else{
        personalMovieDB.movies[a] = b;
    }
}




console.log(personalMovieDB)