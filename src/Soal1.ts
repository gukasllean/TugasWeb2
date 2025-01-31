import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function countingValleys(steps: number, path: string): number {
    let valleys = 0;
    let level = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++;
            if (level === 0) {
                valleys++;
            }
        } else {
            level--;
        }
    }

    return valleys;
}

function isValidPath(path: string): boolean {
    
    return /^[UD]+$/.test(path);
}


function getUserInput(): void {
    while (true) {
        // Get number of steps
        const stepsInput = prompt('Enter the number of steps: ');
        const steps = Number(stepsInput);

        if (isNaN(steps) || steps <= 0) {
            console.log('Please enter a valid positive number for steps.');
            continue;
        }

        const path = prompt('Enter the path (use only U for up and D for down): ').toUpperCase();

        if (path.length !== steps) {
            console.log(`Path length (${path.length}) must match the number of steps (${steps})`);
            continue;
        }

        if (!isValidPath(path)) {
            console.log('Path can only contain U (up) and D (down) characters');
            continue;
        }

       
        const result = countingValleys(steps, path);
        console.log(`Number of valleys traversed: ${result}`);

       
        const again = prompt('Would you like to count more valleys? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            console.log('Goodbye!');
            break;
        }
    }
}


console.log('Welcome to the Valley Counter!');
console.log('This program will count how many valleys you traverse.');
console.log('A valley is when you go below sea level and return to sea level.');
getUserInput();
