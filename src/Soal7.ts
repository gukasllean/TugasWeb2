import promptSync from 'prompt-sync';
const prompt = promptSync();


function plusMinus(arr: number[]): void {
    const total = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    
    arr.forEach(num => {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    });

    console.log((positive / total).toFixed(6));
    console.log((negative / total).toFixed(6));
    console.log((zero / total).toFixed(6));
}


function getUserInput(): void {
    const n = Number(prompt('Enter the size of the array: '));

    
    const arr = prompt(`Enter the ${n} elements of the array: `)
        .split(' ')
        .map(Number);  
    
    plusMinus(arr);
}


console.log('Welcome to the Plus Minus Calculator!');
getUserInput();
