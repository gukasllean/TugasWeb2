import promptSync from 'prompt-sync';
const prompt = promptSync();

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    // Iterasi array nums
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
}

function getUserInput(): void {
    let continueLoop = true;

    while (continueLoop) {
        const nums = prompt('Enter the array of numbers (comma separated): ')
            .split(',')
            .map(Number); 
        
        const target = Number(prompt('Enter the target: '));

        
        const result = twoSum(nums, target);
        console.log(`Indices of the two numbers are: [${result.join(', ')}]`);

        
        const again = prompt('Do you want to check another number? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            continueLoop = false;
            console.log('Goodbye!');
        }
    }
}


console.log('Welcome to the Two Sum Problem Solver!');
getUserInput();
