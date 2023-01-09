
function vowles_count(name){
let vowles = "aeiou";    
let count = 0;
let sum;
for(let i = 0; i<name.length; i++){
    for(let j = 0; j<vowles.length;j++){
        if(name[i] == vowles[j]){
            sum = 1 + count
            count = sum 
        }
    }
}
return sum
}
let result = vowles_count("rakesh");
console.log(result);
