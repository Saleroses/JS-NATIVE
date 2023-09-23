// Promise.all || allsetlled || any || race || async await

const server = {
  getData() {
    const promise = new Promise( (res, rej) => {
      setTimeout( () => {
        res("Some data");
        rej('error');
      }, 1000)
    });
    return promise
  },
}


fetch('https://www.google.com/search?q=js').then((data) => {
  // console.log('Date from google', data.ok)
})            //fetch делает запрос, получить ответ можно через then


// как сделать цепочку запросов

fetch('https://www.google.com/search?=js')
  .then((data) => {
  //console.log('Date from google', data.url);
  return fetch('https://www.ya.ru/search?=js')
  })
  .then((data) => {
    //console.log('Date from ya', data.url);
    return fetch('https://www.yahoo.com/search?=js')
  })
  .then((data) => {
    //console.log('Date from yahoo', data.url);
  })
  .catch((err) =>{ // ловим ошибку если есть
    //console.log('ERROR', err)
  })


// Если нужно выполнить что то, если все промисы выполнились

const pr1 = fetch('https://www.google.com/')
const pr2 = fetch('https://www.ya.ru/')
const pr3 = fetch('https://www.yahoo.com/')

const bigPromise = Promise.all([pr1, pr2, pr3]) //Передаем массив нужных промисов

bigPromise.then((bigData) => {
  // console.log('BIG DATA', bigData[0].url)
  // console.log('BIG DATA', bigData[1].url)
  // console.log('BIG DATA', bigData[2].url)
})
  .catch((err)=> {
    // console.log('Error', err)
  })


//race подписываемся на результат первого выполненного промиса

Promise.race([pr1, pr2, pr3])
  .then((data)=>{
    // console.log(data.url)
  })
  .catch((err)=> {
    console.log('Error', err)
  })

//allsetlled получаем объект с ответами на запрос

Promise.allSettled([pr1, pr2, pr3])
  .then((data)=>{
    // console.log(data)
  })
  .catch((err)=> { // Не срабатывает в этом случае
    // console.log('Error', err)
  })


//any срабатывает кто быстрее получил ответ

Promise.any([pr1, pr2, pr3])
  .then((data)=>{
    // console.log(data.url)
  })
  .catch((err)=> { // Не срабатывает в этом случае
    // console.log('Error', err)
  })

//Асинхронно

const foo = async () => {
  try {
    const googleData = await fetch('https://www.google.com/search?=js')
    console.log(googleData.url)
    const yaData = await fetch('https://www.ya.ru/search?=js')
    console.log(yaData.url)
    const yahooData = await fetch('https://www.yahoo.com/search?=js')
    console.log(yahooData.url)
  }
  catch (e) {
    console.log('ERROR')
  }
}
foo()
