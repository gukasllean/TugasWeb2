import promptSync from 'prompt-sync';
const prompt = promptSync(); 

function climbStairs(n: number): number {
    if (n === 1) return 1;

    let prev1 = 1; 
    let prev2 = 2;

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
}

function getUserInput(): void {
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
