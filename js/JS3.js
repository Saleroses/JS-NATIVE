
const td_1 = "qv34"
const td_2 = "fv35"



const todoLists = [
  {
    id: td_1,
    title: "What",
    filter: "All",
  },
  {
    id: td_2,
    title: "What to bue",
    filter: "All",
  },
]


const tasks = {
  [td_1]: [
    {id: 1, title: "HNdadaVK", isDone: false},
    {id: 2, title: "HNdVK", isDone: false},
    {id: 3, title: "HNaeeeVK", isDone: false},
  ],
  [td_2]: [
    {id: 1, title: "HNVK", isDone: false},
    {id: 2, title: "HNVK", isDone: false},
    {id: 3, title: "HNVK", isDone: false},
  ],
}




const array = [2,3,4,5,6,7]

const max = array.reduce( (acc,an) => acc >= an ? acc : an)

console.log(max)
