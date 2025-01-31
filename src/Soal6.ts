import promptSync from 'prompt-sync';
const prompt = promptSync();

function birthdayCakeCandles(candles: number[]): number {
    const maxHeight = Math.max(...candles);
    const count = candles.filter(candle => candle === maxHeight).length;
    return count;
}

function getUserInput(): void {
    const n = Number(prompt('Enter the number of candles: '));

    const candles = prompt(`Enter the heights of the ${n} candles: `)
        .split(' ')
        .map(Number);

    const result = birthdayCakeCandles(candles);
    console.log(result);
}

console.log('Welcome to the Birthday Cake Candles Counter!');
getUserInput();
