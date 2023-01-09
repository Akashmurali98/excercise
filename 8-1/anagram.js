
function vowles_count(name){
let vowles = "akash";    
let count = 0;
let sum;
for(let i = 0; i<name.length; i++){
    for(let j = 0; j<vowles.length;j++){
        if(name[i] == vowles[j]){
            sum = 1 + count
            count = sum 
            
        }
        if(name.length == sum){
            return "it is anagram"
        }
    }
    
}
return "it is not anagram"
}
let result = vowles_count("akash");
console.log(result)
