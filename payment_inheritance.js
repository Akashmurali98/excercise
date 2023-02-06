

class paymentDetails {
    
    constructor (bankName,cardNumber,cvv,upi,pin) {
        this.bankName = bankName,
        this.cardNumber = cardNumber,
        this.cvv = cvv,
        this.upi = upi,
        this.casOnDelivery = false,
        this.pin = pin
        // console.log(this.pin)
    }
    verification() {
        let code = prompt("Enter OTP :")
        if (9988 == code ) {
            return "Payment Successfully Made"
        }else {
            return " OTP Incorrect"
        }
    }
    cashOnDelivery (input) {
        if (input){
            return "Order Placed Successfully"
        }
    }
    
}

class upi extends paymentDetails {
    constructor(bankName,cardNumber,cvv,upi,pin){
        super (bankName,cardNumber,cvv,upi,pin);
        console.log(this.pin)
    }
    
    upiValidation(upiId) {
        if(this.upi = upiId){
            let pin = prompt("Kindly enter the pin for further process: ")
            if(this.pin == pin){
                return "Payment Made Successflly"
            }else {
                return "Upi verification failed" 
            }
        }else {
            return "Upi verification failed" 
      }
    }
}


class netBanking extends paymentDetails {
    
    constructor(bankName,cardNumber,cvv,upi,pin){
        super (bankName,cardNumber,cvv,upi,pin);
    }
    
    credentials(userId,password){
        if(userId = "akash"  && 1234 == password ){
            return "OTP required"
        }else {
            return "Given Username (or) Password is wrong "}   
    }
}

// ** Net Banking
let netBankingStatusObj = new netBanking( );
console.log(netBankingStatusObj.credentials("akash", 1234))
console.log(netBankingStatusObj.verification())



// ** UPI Status
// let upiObj = new upi("Axis Bank",123456,987,"akash.ax.com",1111)
// let result = upiObj.upiValidation("akash.ax.com")
// console.log(result)


















































