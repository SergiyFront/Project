const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}



for(let i = 0; i< 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if(a != null && b != null && a!='' && b !='' && a.length < 50){
        console.log("done");
        personalMovieDB.movies[a] = b;
    }
    else{
        i--;
        console.log("eror")
    }
}

if(personalMovieDB.count < 10){
    console.log("Посмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <30 ){
    console.log("Вы клсический киноман")
}else if(personalMovieDB.count >=30){
    console.log("Вы киноман");
}else{
    console.log("Eror");
}

console.log(personalMovieDB)