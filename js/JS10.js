//Собственный промис

const myPromise = new Promise( (resolve, reject) => {
  const str = "long"

  if (str.length > 3) {
    resolve("Good")
  } else {
    reject ("Bad")
  }
})
