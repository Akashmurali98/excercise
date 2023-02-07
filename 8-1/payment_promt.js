class PaymentDetails {
    
    constructor (pin) {
        this.pin = pin
    }
    
    verification() {
        let code = prompt("Enter OTP : ")
        if (9988 == code ) {
            return "Payment Made Successfully"
        }else {
            return " OTP Incorrect"
        }
    }
}

let objPaymentdetails  = new PaymentDetails(9988);

class Upi extends PaymentDetails {
    constructor (upi) {
        super ()
        this.upi = upi
    }
    
    upiValidation() {
        const upiId = prompt("Enter the UPI ID : ")
        if(this.upi == upiId){
            return super.verification() 
        }else {
            return "Upi verification failed" 
        }
    }
}

// let objUpi = new Upi("akash@icici.com")
// console.log(objUpi.upiValidation())


class NetBanking extends PaymentDetails{
    constructor (username) {
        super ()
        this.username = username 
    }
    credentials(){
        const username = prompt("Enter Username : ")
        if(this.username == username){
            return super.verification()
        }else {
            return "Given Username (or) Password is wrong "}   
    }
}

// let objNetBanking = new NetBanking("akash");
// console.log(objNetBanking.credentials())

class Cards extends PaymentDetails {
     constructor (cardNumber,cvv) {
        super ()
        this.cardNumber = cardNumber 
        this.cvv = cvv
    }
    credentialss(){
        const cardNumber = prompt("Card Number : ")
        const cvv = prompt("CVV : ")
        
        if(this.cardNumber == cardNumber && this.cvv == cvv){
            return super.verification()
        }else {
            
            return "Given Card Number (or) CVV is wrong "}   
    }
}
// let objCards = new Cards(147852,456);
// console.log(objCards.credentialss())


class CashOnDelivery extends PaymentDetails{
    constructor (cash) {
        super ()
        this.cash = cash
    }
    step(){
        this.cash = prompt("Kindly give yes to book : ")
        if (this.cash == "yes"){
            return "Successfully Ordered"
        }else {
            return "Error"
        }
    }
}

let cashOnDelivery = new CashOnDelivery();
console.log(cashOnDelivery.step())
