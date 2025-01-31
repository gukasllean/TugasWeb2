"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync")); // Menggunakan import untuk prompt-sync
const prompt = (0, prompt_sync_1.default)(); // Membuat objek prompt untuk input dari pengguna
// Fungsi untuk menghitung indeks dua angka yang jumlahnya sama dengan target
function twoSum(nums, target) {
    const map = new Map(); // Membuat hash map untuk menyimpan nilai dan indeksnya
    // Iterasi array nums
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Menghitung selisih yang dibutuhkan untuk mencapai target
        // Jika selisihnya ada di map, berarti kita menemukan pasangan
        if (map.has(complement)) {
            return [map.get(complement), i]; // Mengembalikan indeks pasangan
        }
        // Jika tidak, simpan angka dan indeksnya di map
        map.set(nums[i], i);
    }
    // Tidak ada pasangan yang ditemukan (secara teori ini tidak perlu karena ada satu solusi yang valid)
    return [];
}
// Fungsi untuk menerima input dari pengguna dan melakukan looping
function getUserInput() {
    let continueLoop = true;
    while (continueLoop) {
        // Minta input untuk array nums dan target
        const nums = prompt('Enter the array of numbers (comma separated): ')
            .split(',')
            .map(Number); // Mengubah input menjadi array angka
        const target = Number(prompt('Enter the target: '));
        // Panggil fungsi twoSum untuk mendapatkan indeks pasangan
        const result = twoSum(nums, target);
        console.log(`Indices of the two numbers are: [${result.join(', ')}]`);
        // Tanya apakah pengguna ingin menginput angka lainnya
        const again = prompt('Do you want to check another number? (yes/no): ').toLowerCase();
        if (again !== 'yes') {
            continueLoop = false; // Jika tidak, hentikan loop
            console.log('Goodbye!');
        }
    }
}
// Mulai program
console.log('Welcome to the Two Sum Problem Solver!');
getUserInput();
