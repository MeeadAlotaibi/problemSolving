let list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

// function findSenior() {
//   const oldestDeveloper = list1.filter((item, index) => {
//     return list1[index].age == 49;
//   });
//   return oldestDeveloper;
// }
// console.log(findSenior(list1));

function findSenior(list1) {
   let oldAge =0;
  list1.map((item, index) => { 
    if (list1[index].age > oldAge) {
      oldAge = list1[index].age;
    }
  });
  return list1.filter((i) => i.age === oldAge);
}
console.log(findSenior(list1));
