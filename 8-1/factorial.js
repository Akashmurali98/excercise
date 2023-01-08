
let n=10;
let input = 3;
let result
for(let i =1;i<=10;i++){
    result =input * i
    
    if (result > 10) {
        break
    }
     
    if(n>=result) {
        console.log(result)
    }
}