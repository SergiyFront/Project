let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function(){
        while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    remeberMyFilms : function (){
        for(let i = 0; i< 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
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
    },detectPersonalLevel : function(){
        if(personalMovieDB.count < 10){
            console.log("Посмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count <30 ){
            console.log("Вы клсический киноман")
        }else if(personalMovieDB.count >=30){
            console.log("Вы киноман");
        }else{
            console.log("Eror");
        }
    },
    showMyDB : function(hiden){
        if(!hiden){
            console.log(personalMovieDB)
            
        }
    }, 
    writeYourGenres : function(){
        for(let i = 1; i <= 3; i++){
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genres ==='' || genres ==null){
                console.log("Вы ввели некоректные данные или не ввели их вовсе");
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genres.split(', ');
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
        
    },
    togleVisibleMyDB : function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false
        }else{
            personalMovieDB.privat = true
        }
    }
}
// personalMovieDB.start();
// personalMovieDB.remeberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.togleVisibleMyDB()