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

class LoanAccount extends Account{
    constructor (accountName, ifscCode, accountNumber, pin, balance, sanchenedAmount, utalizedAmount) {
        super(accountName, ifscCode, accountNumber, pin, balance)
        this.sanchenedAmount = sanchenedAmount
        this.utalizedAmount = utalizedAmount
    }
    
    depositAmount (amount) {
        this.utalizedAmount = this.utalizedAmount - amount
        this.balance = this.balance + amount
        return this.balance
    }
    
    // method overriding
    checkBalance (isDetailedBalanceCheck) {
        if (isDetailedBalanceCheck) {
            if (this.isDeactivated == false) {
            return `the balance is ${this.balance} and ${this.utalizedAmount}`    
            } else {
                return ' Your account is deactivated'
            }
        } else {
             return super.checkBalance()
        }
    }
    
    withdrawnamount (accountNumber,pin,amount) {
        
        if (this.accountNumber == accountNumber && this.pin == pin ) {
            if (this.isDeactivated == false) {
                this.utalizedAmount = this.utalizedAmount + amount 
                this.balance = this.balance - amount
              return  `Your balance is Rs.${this.balance} utilized of Rs.${this.utalizedAmount}`   
            } else {
                return ' Your account is deactivated'
            }
        } 
        
    }
    
}

let loanAccountObj = new LoanAccount('Akash', 'ICICI123', 7832463287, 123, 200000, 100000, 1000)
console.log(loanAccountObj.withdrawnamount(7832463287,123,10000))

