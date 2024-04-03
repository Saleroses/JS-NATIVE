// let promise = new Promise((res, rej) => {
//   setTimeout(()=>{
//     res()
//   }, 1000)
// })


console.log('Request data...')
//
// setTimeout(()=>{
//   console.log('Preparing data...')
//
//   const backendData = {
//     server: 'avs',
//     port: 2000,
//     status: 'working'
//   }
//
//   setTimeout(()=>{
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//       server: 'avs',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000)
// })
//
// pr.then((data)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
// }).then((clientData)=>{
//   console.log('Data received', clientData)
//   clientData.order = 1234
//   return clientData
// }).then((clientData)=>{
//   console.log(clientData)
// }).catch((err)=>{ // ловит ошибки и выводит
//   console.log('Error', err)
// }).finally(()=>{
//   console.log('Finish') // выводится в любом случае
// })


const timeOut = (sec) => {
  sec*=1000
  const pr = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(sec)
    }, sec)

  })
  return pr
}

timeOut(5).
then((data)=> {
  console.log('я сработал через', data/1000, 'sec')
}).
finally(()=>{
  console.log('finally')
})



