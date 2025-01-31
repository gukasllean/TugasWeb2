"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function countWordsInCamelCase(s) {
    let wordCount = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            wordCount++;
        }
    }
    return wordCount;
}
function getUserInput() {
    while (true) {
        const inputString = prompt('Enter a CamelCase string: ');
        if (inputString.length === 0) {
            console.log('Input cannot be empty. Please enter a valid string.');
            continue;
        }
        const wordCount = countWordsInCamelCase(inputString);
        console.log(`The number of words in the CamelCase string is: ${wordCount}`);
        const again = prompt('Would you like to enter another string? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            console.log('Goodbye!');
            break;
        }
    }
}
console.log('Welcome to the CamelCase Word Counter!');
getUserInput();
