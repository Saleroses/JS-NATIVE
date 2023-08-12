let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
];

const GetNames = () => {
  const results = [];
  for (let i = 0; i < students.length; i++){
    const newValue = students[i].name
    results[i] = newValue
  }
  return results
}


const getScores = (Array) => {
  const results = []
  const getStScores = st => st.scores
  for (let i = 0; i < array.length; i++) {
    const newValue = getStScores(array[i])
    results[i] = newValue
  }
}

const sFilter = (array, func) => {
  const results = []
  for (let i = 0; i < array.length; i++) {
    if(func(array[i]) === true) {
      results.push(array[i])
    }
  }
  return results
}

let number = [1,2,3,4,5,6,7,8,9]


console.log(students.pop())
