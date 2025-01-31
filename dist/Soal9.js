"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function climbStairs(n) {
    if (n === 1)
        return 1;
    let prev1 = 1;
    let prev2 = 2;
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return prev2;
}
function getUserInput() {
    let continueLoop = true;
    while (continueLoop) {
        const n = Number(prompt('Enter the number of steps (n): '));
        const result = climbStairs(n);
        console.log(`Number of distinct ways to climb to the top: ${result}`);
        const again = prompt('Do you want to check another number? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            continueLoop = false;
            console.log('Goodbye!');
        }
    }
}
// Mulai program
console.log('Welcome to the Staircase Climbing Calculator!');
getUserInput();
