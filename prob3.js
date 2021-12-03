/// استخرج من المصفوفة الرقم الاكثر تكراراً


const highestRank = (arr) =>
  arr.sort( (a, b) =>
      arr.filter((val) => val === b).length - arr.filter((val) => val === a).length || b - a)[0];

console.log(highestRank([2, 3, 4, 5, 2, 7, 7, 8, 2]));
