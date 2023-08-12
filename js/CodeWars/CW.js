
// Сортировка массива от короткого к длинному
//let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]
function sortByLength (arr) {
return arr.sort((a, b) => a.length - b.length)
};
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
