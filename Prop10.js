var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];


const fuct = () => {
  const JavaScript = list1.filter((item) => item.language == "JavaScript");
  JavaScript = JavaScript.length**2
  const Ruby = list1.filter((item) => item.language == "Ruby");
  Ruby = Ruby.length ** 2;
  const Python = list1.filter((item) => item.language == "Python");
  Python = Python.length ** 2;





  if (JavaScript.length > Ruby && JavaScript.length > Python) {
    return true;
  } else if (Python.length > JavaScript && Python.length > Ruby) {
    return true;
  } else if (Ruby.length > JavaScript && Ruby.length > Python) {
    return true;
  } else {
    return false;
  }
};

console.log(fuct());