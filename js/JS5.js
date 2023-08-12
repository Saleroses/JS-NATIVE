const names = ['Donald', 'Alex', 'Bob']
console.log(names.sort())


const comFunc = (a, b) => {
  if (a > b) {
    return 1
  } else {
    return -1
  }
}

const names2 = [15, -3, 1000, 654];
console.log(names2.sort(comFunc))

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

const sortName = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1
  } else {
    return -1
  }
}

console.log(students.sort(sortName))
// Сортировка по строковым значениям
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))

// Сортировка по числовым значениям
console.log(students.sort((a, b) => a.age - b.age))


// bubble sort
const nums2 = [100, 333, 15, -3, 1000, 654];

  for (let j = 0; j < nums2.length; j++) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] > nums2[i + 1]) {
        let temp = nums2[i + 1]
        nums2[i + 1] = nums2[i]
        nums2[i] = temp
        // or
        // [nums2[i], nums2[i + 1]] = [nums2[i + 1], nums2[i]]
      }
    }
  };


console.log(nums2)


