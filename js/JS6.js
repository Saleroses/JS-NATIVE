// https://www.dev-notes.ru/articles/deep-copying-using-structured-clone/


const students = [
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
    scores: 90,
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
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const user = {
  name: "Bob",
  age: 23,
  isMarried: false,
  friends: ["Alex", "Nick", "John"],
};

//1. Поверхностная копия student

let copyUser = {...user}; // Object
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);


// 2. Полная (глубокая) копия student
//const deepCopyStudent = { ...user, friends: [...user.friends] };
// console.log(user === deepCopyStudent);
// console.log(user.friends == deepCopyStudent.friends);

// //3. Поверхностная копия students
const copyStudents = [...students];
// console.log(students === copyStudents);
// console.log(students[0] === copyStudents[0]);
//
// //4*. Полная (глубокая) копия students
//let deepCopyStudents = students.map(st => st);
const deepCopyStudents = structuredClone(students)
// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
//console.log(deepCopyStudents);
// //
// //Далее все преобразования выполняем не модифицируя исходный массив students
//
//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
//const sortByScore = deepCopyStudents.sort((a, b) => b.scores - a.scores);
// console.log(sortByScore)
// console.log(deepCopyStudents)

//5a. Отсортируйте студентов по алфавиту
// function sortByName(a, b) {
//   switch (a.name > b.name) {
//     case true:
//       return 1;
//     case false:
//       return -1;
//     default:
//       return 0;
//   }
// }
const sortedByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1);
//const sortedByName = students.sort((a, b)=> a.name.localeCompare(b.name));
//console.log(sortedByName);
//
// //6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter((st) => st.scores >= 100);
console.log(bestStudents);
//
// //6a.Сформируйте массив из трёх лучших студентов
// // const topStudents = deepCopyStudents.splice(0, 3);
// // console.log(topStudents);
// // console.log(deepCopyStudents);
//
// //6b. Объедините массивы deepCopyStudents и topStudents так,
// // чтоб сохранился порядок сортировки
// const newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// console.log(newDeepCopyStudents);
//
// //7. Сформируйте массив холостых студентов
const notMarriedStudents = students.filter((st) => !st.isMarried);
// console.log(notMarriedStudents);
//
// //8. Сформируйте массив имён студентов
const studentsNames = students.map((st) => st.name);
// console.log(studentsNames);
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом
// // - запятой
const nameWithSpace = studentsNames.join(" ");
// console.log(nameWithSpace);
const namesWithComma = studentsNames.join(", ");
// console.log(namesWithComma);
//
// //9. Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map((st) => ({...st, isStudent: true}));
// console.log(trueStudents);
//
// //10. Nick женился. Выполните преобразование массива students
let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);
// const studentsWithMarriedNick = students.map((st) => {
//   if (st.name === "Nick") {
//     return { ...st, isMarried: true };
//   }
//   return st;
// });
// console.log(studentsWithMarriedNick);
//
// //11. Найдите Студентку по имени Ann
const ann = students.find((st) => st.name === "Ann");
// console.log(ann);
// console.log(students);
//
// //12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, st) => {
  return acc.scores > st.scores ? acc : st;
});
// console.log(bestStudent);
// //12a. Найдите 2 студента с самым высоким баллом
// //let bestStudent = students[0];
// let bestStudent2 = students[1];
// for (let i=1; i < students.length; i++) {
//   if (bestStudent.scores > bestStudent2.scores) {
//     if (students[i].scores > bestStudent2.scores) {
//       bestStudent2 = students[i];
//     }
//   }  else {
//     if (students[i].scores > bestStudent.scores) {
//       bestStudent = students[i];
//     }
//   }
//
// }
// let best1 = students[0]
// let best2 = students[0]
//
// for (let i = 0; i < students.length; i++) {
//   if (students[i].scores > best1.scores) {
//     best1 = students[i]
//
//   } else  if (students[i].scores > best2.scores ){
//     best2 = students[i]
//   }
//
// }
//
//
// //13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, st) => acc + st.scores, 0);
// console.log(scoresSum);
//
// // 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
//
// // function addFriends(students) {
// //     const studentsNames = students.map(st => st.name)
// //     function getFriendsList(student){
// //         const friendsList = studentsNames.filter(name => student.name !== name)
// //         return friendsList
// //     }
// //     const studentsWithFriends = students.map(st => {
// //         return {...st, friends: getFriendsList(st)}
// //     })
// //     return studentsWithFriends
//
// // }
// const addFriends = (sts) => {
//   return sts.map((st) => ({
//     ...st,
//     friends: sts.map((st) => st.name).filter((name) => name !== st.name),
//   }));
// };
//
// console.log(addFriends(students));
// //main-06.js
// //main-06.js. На экране.


// 1. Simple object
let man = {
  name: 'John',
  age: 28
};

let manFullCopy = structuredClone(man)
// console.log(manFullCopy)

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = {...numbers}
// console.log(numbersFullCopy)

// 3. Object inside an object
let man1 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50
  }
};

let man1FullCopy = structuredClone(man1)
// console.log(man1FullCopy.mother.name)

// 4. Array of primitives inside an object
let man2 = {
  name: 'John',
  age: 28,
  friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2}
man2FullCopy.friends = man2.friends
console.log(man2FullCopy)

// 5 Array of objects
let people = [
  {name: "Peter", age: 30},
  {name: "Steven", age: 32},
  {name: "William", age: 28}
];


let peopleFullCopy = {...people}
console.log(peopleFullCopy)

// 6 Array of objects inside object
let man3 = {
  name: 'John',
  age: 28,
  friends: [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
  ]
};



const addFriends = (u, friend) => {
  return (
    {...u,
      friends: [...u.friends.push({friend})]
    }
  )
};

addFriends(man3, {name: "Egor", age: 34})

console.log(man3)

// let man3FullCopy = {...man3}
// man3FullCopy.friends = man3.friends
// man3FullCopy.friends.push({name: "Im", age: 33})
// console.log(man3FullCopy)

// 7 Object inside an object, inside an object
let man4 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    }
  }
};

let man4FullCopy = structuredClone(man4)
console.log(man4FullCopy.mother.work)

// 8 Array of objects inside object -> object
let man5 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {name: "Kevin", age: 80},
      {name: "Jennifer", age: 78},
    ]
  }
};

let man5FullCopy = structuredClone(man5)
console.log(man5FullCopy.mother.parents)


// 9 Object inside an object -> array -> object ->  object
let man6 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht"
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi"
        }
      },
    ]
  }
};

let man6FullCopy  //  your code


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            {title: "beet", amount: 3},
            {title: "potatoes", amount: 5},
            {title: "carrot", amount: 1},
          ]
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            {title: "fish", amount: 1},
            {title: "rise", amount: 0.5}
          ]
        }
      },
    ]
  }
};

let man7FullCopy  //  your code
