const { describe, test, expect } = require('@jest/globals');
const { ChangeHandler } = require('./change-handler');

describe('ChangeHandler tests', () => {

    test('constructor sets amountDue = 100 and cashTendered = 0', () => {
        const changeHandler = new ChangeHandler(100);
        expect(changeHandler.amountDue).toEqual(100);
        expect(changeHandler.cashTendered).toEqual(0);
    });

    test('inserting a quarter adds 25 to cashTendered', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.insertCoin('q');
        expect(changeHandler.cashTendered).toEqual(25);
    });

    test('inserting a dime adds 10 to cashTendered', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.insertCoin('d');
        expect(changeHandler.cashTendered).toEqual(10);
    });

    test('inserting a nickel adds 5 to cashTendered', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.insertCoin('n');
        expect(changeHandler.cashTendered).toEqual(5);
    });

    test('inserting a penny adds 1 to cashTendered', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.insertCoin('p');
        expect(changeHandler.cashTendered).toEqual(1);
    });

    test('inserting a quarter, dime, nickel, and penny adds 41 to cashTendered', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.insertCoin('q');
        changeHandler.insertCoin('d');
        changeHandler.insertCoin('n');
        changeHandler.insertCoin('p');
        expect(changeHandler.cashTendered).toEqual(41);
    });

    test('isPaymentSufficient returns true if cashTendered > amountDue', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 150;
        expect(changeHandler.isPaymentSufficient()).toEqual(true);
    });

    test('isPaymentSufficient returns false if cashTendered < amountDue', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 50;
        expect(changeHandler.isPaymentSufficient()).toEqual(false);
    });

    test('isPaymentSufficient returns true if cashTendered = amountDue', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 100;
        expect(changeHandler.isPaymentSufficient()).toEqual(true);
    });

    test('32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 132;
        expect(changeHandler.giveChange()).toEqual('quarters: 1, dimes: 0, nickels: 1, pennies: 2');
    });

    test('10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 110;
        expect(changeHandler.giveChange()).toEqual('quarters: 0, dimes: 1, nickels: 0, pennies: 0');
    });

    test('27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 127;
        expect(changeHandler.giveChange()).toEqual('quarters: 1, dimes: 0, nickels: 0, pennies: 2');
    });

    test('68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3', () => {
        const changeHandler = new ChangeHandler(100);
        changeHandler.cashTendered = 168;
        expect(changeHandler.giveChange()).toEqual('quarters: 2, dimes: 1, nickels: 1, pennies: 3');
    });

});