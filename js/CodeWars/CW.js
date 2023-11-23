
// Сортировка массива от короткого к длинному
//let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]
function sortByLength (arr) {
return arr.sort((a, b) => a.length - b.length)
}
//['Eyes', 'Glasses', 'Monocles', 'Telescopes']


//Замена цифр в строке на буквы
//let string1 = 'L0ND0N'
function correct(string1) {
  let  result = ''
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === "5") {
      result = result + "S"
    } else if (string1[i] === "0") {
      result = result + "O"
    } else if (string1[i] === "1") {
      result = result + "I"
    } else result = result + string1[i]
  }
  return result
}
//'LONDON'

let laLigaGoals = 43
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

///////

//   Дети пьют тодди.
//   Подростки пьют колу.
//   Молодые люди пьют пиво.
//   Взрослые пьют виски.
//   Сделайте функцию, которая получает возраст и возвращает то, что они пьют.
//
//   Правила:
//
// Дети до 14 лет.
//   Подростки до 18 лет.
//   Молодые до 21 года.
//   У взрослых 21 и более.
//   Примеры: (Ввод --> Вывод)
//
// 13 --> "пить пунш"
// 17 --> "пить колу"
// 18 --> "пить пиво"
// 20 --> "пить пиво"
// 30 --> "пить виски"


function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy"
  } if (old >= 14 & old < 18) {
    return "drink coke"
  } if (old >= 18 & old < 21) {
    return "drink beer"
  } else {return "drink whisky"}
};

//////

// По городу движется автобус, который забирает и высаживает несколько человек на каждой остановке.
//
// Вам предоставляется список (или массив) целочисленных пар. Элементы каждой пары представляют количество людей, садящихся в автобус (первый элемент), и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.
//
// Ваша задача — вернуть количество людей, которые еще находятся в автобусе после последней автобусной остановки (после последнего массива). Несмотря на то, что это последняя автобусная остановка, автобус может быть не пустым, и некоторые люди все еще могут быть внутри автобуса, они, вероятно, спят там :D
//
// Взгляните на тест-кейсы.
//
// Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.
//
// Второе значение в первой паре массива равно 0, так как на первой остановке автобус пустой.

// let busStops = [[16,0],[97,10],[17,88],[41,7],[77,49],[6,34],[88,53],[79,95],[98,43],[50,124],[84,36],[22,110],[84,17],[40,64]]
//
// let number = function(busStops){
//   debugger
//   let result = [];
//   for (let i = 0; i < busStops.length; i++) {
//     result[i] = busStops[i][0] - busStops[i][1]
//
//   }
//   return result.reduce((sum, correct) => sum + correct)
// }

//////
let p0 = 1000
let percent = 2
let aug = 50
let p = 1200

function nbYear(p0, percent, aug, p) {
  let people = 0
  let result = 0
  for (; people < p; result++) {
    people = p0 + (percent/100) * p0 + aug
  }
  return result
}



console.log(p0 = p0 * percent/100 + aug)
