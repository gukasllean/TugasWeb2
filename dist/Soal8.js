"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let original = x;
    let reversed = 0;
    while (x > 0) {
        const lastDigit = x % 10;
        reversed = reversed * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    return original === reversed;
}
function getUserInput() {
    let continueLoop = true;
    while (continueLoop) {
        const x = Number(prompt('Enter an integer: '));
        const result = isPalindrome(x);
        console.log(result);
        const again = prompt('Do you want to check another number? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            continueLoop = false;
            console.log('Goodbye!');
        }
    }
}
console.log('Welcome to the Palindrome Checker!');
getUserInput();
