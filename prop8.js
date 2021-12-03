function primes(start, end) {
  for (let i = start; i <= end; i++) {
    let x = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        x = 1;
        break;
      }
    }
    if (i > 1 && x == 0) {
      console.log(i);
    }
  }
}

console.log(primes(5, 7));
