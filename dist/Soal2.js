"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function gradingStudents(grades) {
    const roundGrade = (grade) => {
        if (grade < 38) {
            return grade;
        }
        const nextMultiple = Math.ceil(grade / 5) * 5;
        if (nextMultiple - grade < 3) {
            return nextMultiple;
        }
        return grade;
    };
    return grades.map(roundGrade);
}
function getGrades() {
    while (true) {
        const numStudentsInput = prompt('Enter the number of students: ');
        const numStudents = Number(numStudentsInput);
        if (isNaN(numStudents) || numStudents <= 0) {
            console.log('Please enter a valid positive number of students.');
            continue;
        }
        const grades = [];
        for (let i = 0; i < numStudents; i++) {
            while (true) {
                const gradeInput = prompt(`Enter grade for student ${i + 1} (0-100): `);
                const grade = Number(gradeInput);
                if (isNaN(grade) || grade < 0 || grade > 100) {
                    console.log('Please enter a valid grade between 0 and 100.');
                    continue;
                }
                grades.push(grade);
                break;
            }
        }
        const roundedGrades = gradingStudents(grades);
        console.log('\nResults:');
        for (let i = 0; i < grades.length; i++) {
            console.log(`Student ${i + 1}: Original Grade: ${grades[i]}, Rounded Grade: ${roundedGrades[i]}`);
        }
        const again = prompt('\nWould you like to grade more students? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            console.log('Goodbye!');
            break;
        }
    }
}
console.log('Welcome to the Grade Rounding System!');
console.log('Rules for rounding:');
console.log('- If the grade is less than 38, no rounding occurs');
console.log('- If the difference between the grade and the next multiple of 5 is less than 3, round up');
console.log('- Otherwise, no rounding occurs\n');
getGrades();
