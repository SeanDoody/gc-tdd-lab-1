import { ChangeHandler } from './change-handler.js';

const changeHandler = new ChangeHandler(window.prompt('what is the amount due (in cents)?'));

const amountDue = document.getElementById('amount-due');
const amountInserted = document.getElementById('amount-inserted');
const getChangeBtn = document.getElementById('get-change');
const insertQuarter = document.getElementById('insert-quarter');
const insertDime = document.getElementById('insert-dime');
const insertNickel = document.getElementById('insert-nickel');
const insertPenny = document.getElementById('insert-penny');

function updateTotal() {
    amountInserted.innerText = `Amount Inserted: $${parseFloat(changeHandler.cashTendered / 100).toFixed(2)}`;
    if (changeHandler.isPaymentSufficient()) {
        getChangeBtn.classList.remove('greyed-out');
        getChangeBtn.addEventListener('click', getChange);
    }
}

function getChange() {
    const change = changeHandler.giveChange();
    document.getElementById('change').innerText = `Your change: ${change}`;
    insertQuarter.removeEventListener('click', () => { changeHandler.insertCoin('quarter') });
    insertQuarter.removeEventListener('click', updateTotal);
    insertQuarter.classList.add('greyed-out');
    insertDime.removeEventListener('click', () => { changeHandler.insertCoin('dime') });
    insertDime.removeEventListener('click', updateTotal);
    insertDime.classList.add('greyed-out');
    insertNickel.removeEventListener('click', () => { changeHandler.insertCoin('nickel') });
    insertNickel.removeEventListener('click', updateTotal);
    insertNickel.classList.add('greyed-out');
    insertPenny.removeEventListener('click', () => { changeHandler.insertCoin('penny') });
    insertPenny.removeEventListener('click', updateTotal);
    insertPenny.classList.add('greyed-out');
    getChangeBtn.classList.add('greyed-out');
    amountDue.innerText = 'Amount Due: $0.00';
}

amountDue.innerText = `Amount Due: $${parseFloat(changeHandler.amountDue / 100).toFixed(2)}`;
updateTotal();

insertQuarter.addEventListener('click', () => { changeHandler.insertCoin('quarter') });
insertQuarter.addEventListener('click', updateTotal);
insertDime.addEventListener('click', () => { changeHandler.insertCoin('dime') });
insertDime.addEventListener('click', updateTotal);
insertNickel.addEventListener('click', () => { changeHandler.insertCoin('nickel') });
insertNickel.addEventListener('click', updateTotal);
insertPenny.addEventListener('click', () => { changeHandler.insertCoin('penny') });
insertPenny.addEventListener('click', updateTotal);