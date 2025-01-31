"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function angryProfessor(k, a) {
    const onTimeCount = a.filter(time => time <= 0).length;
    return onTimeCount >= k ? 'NO' : 'YES';
}
function getUserInput() {
    const t = Number(prompt('Enter the number of test cases: '));
    for (let i = 0; i < t; i++) {
        const [n, k] = prompt('Enter n and k: ').split(' ').map(Number);
        const arrivalTimes = prompt(`Enter arrival times for ${n} students: `)
            .split(' ')
            .map(Number);
        const result = angryProfessor(k, arrivalTimes);
        console.log(result);
    }
}
console.log('Welcome to the Angry Professor Program!');
getUserInput();
