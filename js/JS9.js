// замыкание, лексическое окружение, рекурсия

//замыкание - способность функции запомнить внешнее лексическое окружение

/////
const car = 'bmw'

startEngine() // вызов сработает до объявления функции

function startEngine () {
  console.log(`Start ${car}`)
}
/////
//startEngine() // вызов НЕ сработает до объявления функции при таком синтаксисе

const startEngine1 = function () {
  const car = 'honda'
  console.log(`Start ${car}`)
}
startEngine1() /// вызов сработает с локальной переменной
//

/// Замыкание
const counter = () => {
  let i = 0
  return ()=> {
    console.log(++i)
  }
}

const count = counter(); //  для каждой переменной будет свое окружение и своя i
const count2 = counter();
count()
count()
count2()
count2()

///рекурсия

const pow = (x, n) => {
  if (n === 1) {
    return x
  } else {
    return x * pow(x, n-1); // обращение функции сама к себе
  }
}


console.log(pow(7, 3))


const numbers = [3,5,7,3,9,6]

function pipeFix(numbers){
  let min = numbers[0]
  let max = [numbers.length-1]
  let res = []

  for (i = min; i < max; i++) {
    res.push(i)
  }
  return res
}

console.log(pipeFix(numbers))


