import PromptSync from 'prompt-sync';
const prompt = PromptSync();


function countWordsInCamelCase(s: string): number {
    let wordCount = 1;  
    
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            wordCount++;
        }
    }
    
    return wordCount;
}


function getUserInput(): void {
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
