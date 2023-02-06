

class cardPayment {
    
    constructor(cardNumber,cvv,code){
        this.cardNumber = cardNumber,
        this.cvv = cvv,
        this.code = code
    }

    cardDetails(){
        const cardNumber = prompt("Card Numvber : ")
        const cvv = prompt("CVV : " )
        if(this.cardNumber == cardNumber && this.cvv == cvv){
            let code = prompt("Code : " )
                if(this.code == code){
                    return "Payment made Successfully "
                }else {
                    return "Credentials given wrong"}
        }else {
            return "Credentials given wrong"
        }
    } 
    
    
} 

let myPayment = new cardPayment(123456,0000,1111);
let cardDetails = myPayment.cardDetails() 
console.log(cardDetails)
