function getMathResult(num, multiple) {
    let result = "";
    for(let i = 1; i <= multiple; i++){
        if(i == multiple ){
            result += `${i * num}`
        }else if(typeof(multiple)!== "number" || multiple <=0){
            result = num
            break
        }
        else{
            result += `${i * num}--`
        }
    }
    return result;
}

console.log(getMathResult(4,"5"))