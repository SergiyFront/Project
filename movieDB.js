let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

function start(){
    while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}



function remeberMyFilms(){
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
}
remeberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Посмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <30 ){
        console.log("Вы клсический киноман")
    }else if(personalMovieDB.count >=30){
        console.log("Вы киноман");
    }else{
        console.log("Eror");
    }
}
detectPersonalLevel();

function showMyDB(hiden){
    if(!hiden){
        console.log(personalMovieDB)
        
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
         
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером  ${i}?`))
    }
}
writeYourGenres();