import PromptSync, * as promptSync from 'prompt-sync';
const prompt = PromptSync();


function angryProfessor(k: number, a: number[]): string {
    
    const onTimeCount = a.filter(time => time <= 0).length;

    
    return onTimeCount >= k ? 'NO' : 'YES';
}


function getUserInput(): void {
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
