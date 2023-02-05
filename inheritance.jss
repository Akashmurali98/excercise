class Account {
    constructor (accountName, ifscCode, accountNumber, pin, balance) {
        this.accountName = accountName
        this.ifscCode = ifscCode
        this.accountNumber = accountNumber
        this.pin = pin
        this.balance = balance
        this.isDeactivated = false
    }
    
    checkBalance () {
        if (this.isDeactivated == false) {
            return this.balance    
        } else {
            return ' Your account is deactivated'
        }
    }
    
    deactivateAccount () {
        this.isDeactivated = true
        return 'Account successfully deactivated'
    }
}

class SavingsAccount extends Account {
    constructor (accountName, ifscCode, accountNumber, pin, balance) {
        super(accountName, ifscCode, accountNumber, pin, balance)
    }
    
    depositAmount (amount) {
        if (this.isDeactivated == false) {
            this.balance = this.balance + amount
            return this.balance
        } else {
            return ' Your account is deactivated'
        }
       
    }
    
    withdrawAmount (amount) {
        if (this.isDeactivated == false) {
            this.balance = this.balance - amount
            return this.balance
        } else {
            return ' Your account is deactivated'
        }
    }
}

let savingsAccountObj = new SavingsAccount ('akash', 'ICICI123', 43127832723, 1234, 20000)
console.log(savingsAccountObj.checkBalance())
console.log(savingsAccountObj.depositAmount(1000))
console.log(savingsAccountObj.withdrawAmount(1000))
console.log(savingsAccountObj.deactivateAccount())
console.log(savingsAccountObj.checkBalance())
