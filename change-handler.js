// for testing, comment this in
// class ChangeHandler {

// for testing, comment this out
export class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    insertCoin(coinType) {
        switch (coinType) {
            case 'quarter':
                this.cashTendered += 25;
                break;
            case 'dime':
                this.cashTendered += 10;
                break;
            case 'nickel':
                this.cashTendered += 5;
                break;
            case 'penny':
                this.cashTendered += 1;
                break;
            default:
                break;
        }
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

// for testing, comment this in
// module.exports = { ChangeHandler };