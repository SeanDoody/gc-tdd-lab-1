const { ChangeHandler } = require('./change-handler');
const prompt = require('prompt-sync')({ sigint: true });

const amountDue = prompt('what is the amount due (in cents)? ');
const changeHandler = new ChangeHandler(amountDue);

let coinType;
let moreCoins;

do {

    console.log(`${changeHandler.amountDue} cents due`);
    console.log('what kind of coin would you like to insert?');
    coinType = prompt('quarter (q), dime (d), nickel (n), or penny (p): ');
    changeHandler.insertCoin(coinType);

    moreCoins = true;
    if (changeHandler.isPaymentSufficient()) {
        console.log('sufficient payment - insert more coins?');
        if (prompt('y/n: ') === 'n') {
            moreCoins = false;
        }
    }

} while (moreCoins);

console.log('your change:');
console.log(changeHandler.giveChange());