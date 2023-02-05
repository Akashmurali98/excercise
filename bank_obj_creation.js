class Bank {

 
    constructor (user_name,acc_no,ifsc_code,balance,pin_no) {
        this.accountdetails = {
            user : user_name,
            acc_no:acc_no,
            ifsc_code:ifsc_code,
            balance :balance,
            pin_no : pin_no
        }
    }

    deposit_amount(acc_no,pin ,amount){
        if(this.accountdetails.acc_no == acc_no && this.accountdetails.pin_no == pin) {
            this.accountdetails.balance = this.accountdetails.balance + amount
            return `Deposit  of Rs.${amount}`
            
         }else {
             return "Account Number (or) Password is wrong"
         }
         
    }
    
    withdraw_amount (acc_no,pin,amount){
        if(this.accountdetails.acc_no == acc_no && this.accountdetails.pin_no == pin) {
            this.accountdetails.balance = this.accountdetails.balance - amount ;
            if(this.accountdetails.balance >= 2000 ){
                return `Withdraw amount of Rs.${amount}`    
                }else {
                this.accountdetails.balance = this.accountdetails.balance + amount ;
                return "Minimum balance should be more than Rs.2000"
                }
        }
    }
    
     balance_amount (acc_no,pin){
        if(this.accountdetails.acc_no == acc_no
          && this.accountdetails.pin_no == pin) {
             return `Balance amount of Rs.${this.accountdetails.balance}`
         } else {
             return "Account Number (or) Password is wrong"
         }
       
    }
    
    
     deactivate_account (account_no,pin) {
         if(this.accountdetails.acc_no == account_no
          && this.accountdetails.pin_no == pin) {
            return this.accountdetails = "Deactivated Account"
         } else {
             return "Account Number (or) Password is wrong"
         }
     }
}
let obj = new Bank("Akash",0001,"DD11",3000,0000);
console.log(obj.accountdetails)

let deposit = obj.deposit_amount(0001,0000,2000);
console.log(deposit);

let withdraw = obj.withdraw_amount(0001,0000,3001);
console.log(withdraw);

let balance = obj.balance_amount(0001,0000);
console.log(balance);

let deactivate_account = obj.deactivate_account(0001,0000);
console.log(deactivate_account);
