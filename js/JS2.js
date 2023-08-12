

const small = document.getElementById("small")

// const smallHandler = () => {
//   alert("ku ku")
// }

small.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    alert("pipi")
  }
})
