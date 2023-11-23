//Рекурсивный способ: упрощение задачи и вызов функцией самой себя:

  // function pow(x, n) {
  //   if (n == 1) {
  //     return x;
  //   } else {
  //     return x * pow(x, n - 1);
  //   }
  // }

function pow(x, n) {
  return (n === 1) ? x : x * pow(x, n-1)
}

console.log(pow(2, 3)) // 8

////

console.log("a")

setTimeout(function () {
  console.log("c")
}, 1000)

setTimeout(function () {
  console.log("d")
}, 500)

console.log("b")

//a,b,d,c потому что d быстрее попадет в очередь call stack

//Ивент луп выполняет задачи по очереди. Сначала очередь микротасок, потом макротасок и потом анимации


