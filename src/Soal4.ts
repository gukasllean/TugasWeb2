import PromptSync from 'prompt-sync';
const prompt = PromptSync();


function staircase(n: number): void {
    for (let i = 1; i <= n; i++) {
        
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}


function getUserInput(): void {
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
