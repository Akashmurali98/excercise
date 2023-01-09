
function pala(){
let name = "akash"
let num = name.length;
// console.log()
// console.log(num)
for(let i = 0; i<num; i ++){
            // console.log(name[num])
            
    if(name[i] !== name[num - 1-i]){
        // console.log(name[num - i])
        return "it is not pala" 
    }
    return "it is palindrome"
    
}
}
console.log(pala())

