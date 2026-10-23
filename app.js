for (let i = 0; i <= 20; i++) {
    console.log("1:", i);
}

for (let i = 20; i >= 1; i--) {
    console.log("2:", i);
}

for (let i = 0; i <=50; i += 2) {
    console.log("3:", i);
}

let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log("3:", totalSum);

for (let i = 1; i <= 10; i++) {
    console.log(`4: ${i} - ${i ** 2}`);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5: 5 x ${i} = ${5 * i}`);
}

let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
    evenSum += i;
}
console.log("6:", evenSum);

for (let i = 0; i <= 100; i += 5) {
    console.log("7:", i);
}

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        count++;
    }
}
console.log("8:", count);
