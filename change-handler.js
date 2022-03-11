class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    insertCoin(coinType) {
        switch (coinType) {
            case 'q':
                this.cashTendered += 25;
                console.log('added 25 cents');
                break;
            case 'd':
                this.cashTendered += 10;
                console.log('added 10 cents');
                break;
            case 'n':
                this.cashTendered += 5;
                console.log('added 5 cents');
                break;
            case 'p':
                this.cashTendered += 1;
                console.log('added 1 cent');
                break;
            default:
                console.log('must enter quarter (q), nickel (n), dime (d), or penny (p)');
                break;
        }
        console.log(`total: ${this.cashTendered} cents inserted`);
    }

    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true;
        } else {
            return false;
        }
    }

    giveChange() {
        let change = this.cashTendered - this.amountDue;
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;

        if (change >= 25) {
            quarters = Math.floor(change / 25);
            change -= quarters * 25;
        }
        if (change >= 10) {
            dimes = Math.floor(change / 10);
            change -= dimes * 10;
        }
        if (change >= 5) {
            nickels = Math.floor(change / 5);
            change -= nickels * 5;
        }
        pennies = change;

        return `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`;
    }
}

module.exports = {
    ChangeHandler
}