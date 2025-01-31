"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}
function getUserInput() {
    while (true) {
        const inputString = prompt('Enter the size of the staircase (n): ');
        const n = Number(inputString);
        if (isNaN(n) || n <= 0 || n > 100) {
            console.log('Please enter a valid number between 1 and 100.');
            continue;
        }
        staircase(n);
        const again = prompt('Would you like to enter another number? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            console.log('Goodbye!');
            break;
        }
    }
}
console.log('Welcome to the Staircase Generator!');
getUserInput();
