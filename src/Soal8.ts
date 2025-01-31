import promptSync from 'prompt-sync';
const prompt = promptSync();


function isPalindrome(x: number): boolean {
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


function getUserInput(): void {
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
