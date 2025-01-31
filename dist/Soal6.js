"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Fungsi untuk menghitung jumlah lilin tertinggi
function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles); // Cari tinggi lilin tertinggi
    const count = candles.filter(candle => candle === maxHeight).length; // Hitung jumlah lilin tertinggi
    return count;
}
// Fungsi untuk meminta input dari pengguna
function getUserInput() {
    const n = Number(prompt('Enter the number of candles: '));
    // Minta input tinggi lilin
    const candles = prompt(`Enter the heights of the ${n} candles: `)
        .split(' ')
        .map(Number); // Mengubah input menjadi array angka
    // Panggil fungsi untuk menghitung jumlah lilin tertinggi
    const result = birthdayCakeCandles(candles);
    console.log(result);
}
// Mulai program
console.log('Welcome to the Birthday Cake Candles Counter!');
getUserInput();
