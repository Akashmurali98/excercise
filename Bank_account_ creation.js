
class Bank {

    constructor(accountdetails){
        this.accountdetails = accountdetails; 
        
    } 
        
    account_Creation(user_name,acc_no,ifsc_code,balance,pin_no){
    
    let account = {
        user : user_name,
        acc_no:acc_no,
        ifsc_code:ifsc_code,
        balance :balance,
        pin_no : pin_no
    }
     this.accountdetails.push(account)
     return this.accountdetails
}

    deposit_amount(acc_no,pin ,amount){
        
         if(this.accountdetails[0].acc_no == acc_no
          && this.accountdetails[0].pin_no == pin) {
             return `Deposit  of Rs.${amount}`
              this.accountdetails[0].balance + amount
             
         } else {
             return "Account Number (or) Password is wrong"
         }
         
    }
    
    
    withdraw_amount (amount,acc_no,pin){
        
        if(this.accountdetails[0].acc_no == acc_no
          && this.accountdetails[0].pin_no == pin) {
            this.accountdetails[0].balance = this.accountdetails[0].balance - amount ;
         
        
        
        
        if(this.accountdetails[0].balance >= 2000 ){
            
        return `Withdraw amount of Rs.${amount}`    
        }else {
            this.accountdetails[0].balance = this.accountdetails[0].balance + amount ;            
            return "Minimum balance should be more than Rs.2000"
        }
          }
        
    }
    
    
     balance_amount (acc_no,pin){
        if(this.accountdetails[0].acc_no == acc_no
          && this.accountdetails[0].pin_no == pin) {
             return `Balance amount of Rs.${this.accountdetails[0].balance}`
         } else {
             return "Account Number (or) Password is wrong"
         }
       
    }
    
    
     deactivate_account (account_no,pin) {
         if(this.accountdetails[0].acc_no == account_no
          && this.accountdetails[0].pin_no == pin) {
            return this.accountdetails = "Deactivated Account"
         } else {
             return "Account Number (or) Password is wrong"
         }
         
     }
    
}
let obj = new Bank([]);
let add = obj.account_Creation("Akash",0001,"DD11",3000,0000);
// console.log(add)

let deposit = obj.deposit_amount(0001,0000,2000);
console.log(deposit);

let withdraw = obj.withdraw_amount(3000);
// console.log(withdraw);

let balance = obj.balance_amount(0001,0000);
// console.log(balance);

let deactivate_account = obj.deactivate_account(0001,0000);
console.log(deactivate_account);





















