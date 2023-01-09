

function char_count(){
let name = "akash";
let char = "a";
let count = 0;
let num; 
// console.log(name)
for (let i = 0; i<name.length; i++){
    
    if(char[0] == name[i]){
          num = 1 + count;
          count = num;
        }
          
    // return num
}
return num
}
let result = char_count();
console.log(result)
