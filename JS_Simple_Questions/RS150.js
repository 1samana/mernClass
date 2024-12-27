const number = parseInt(prompt("Enter a number to check if it's prime:"));

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            return false; // Found a divisor, not prime
        }
    }
    return true; // No divisors found, it's prime
}

if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
