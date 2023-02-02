

function flames(male,female){
 
    for(let i = 0; i < male.length; i++){
        
        for(let j = 0; j < female.length; j++){
            if(male[i] == female[j]){
                female = female.slice(0,j)+female.slice(1+j);
                break
            }
               
        }
        
    }
let count = male.length + female.length
let flamesCount = count % 6;
let result;

switch (flamesCount){
    case 0 : 
        result : "Friends";
        break;
    case 1 :
        result = "Love";
        break;
    case 2 : 
        result = "Affection";
        break;
    case 3 : 
        result = "Marriage";
        break;
    case 4 : 
        result = "Enemy";
        break;
    case 5 :
        result = "Sex";
        
}
    return result
}
let result = flames("murali" , "dhanalakshmi")
console.log(result)
