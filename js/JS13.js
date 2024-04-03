
setTimeout(()=>{
  console.log('1')
}, 0)

setTimeout(()=>{
  console.log('2')
}, 1000)

new Promise ((res, rej)=> {
  console.log('3')
  res()
  console.log('4')
}).then(()=>{
  console.log('5')
})

console.log('6')

async function test1() {
  console.log('7')
  await test2()
  console.log('8')
}

async function test2() {
  console.log('9')
}

test1()

console.log('10')
