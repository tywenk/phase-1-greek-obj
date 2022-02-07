import { mythologyData } from "./greek.js"

//print out each name of the Greek gods
// console.log(mythologyData().gods.forEach((god) => console.log(god.name)))

const godsObj = mythologyData().gods

document.querySelector("#greek_chooser").addEventListener("submit", (e) => {
  e.preventDefault()

  const godsSelect = e.target.gods.value

  createCard(godsSelect)
})

const createOption = () => {
  const godsNames = godsObj.map((god) => god.name)

  const list = document.querySelector("#gods")

  godsNames.forEach((god) => {
    let option = document.createElement("option")
    option.setAttribute("value", god)
    option.textContent = god.toString()
    list.appendChild(option)
  })
}

const createCard = (godsSelect) => {
  let selected = godsObj.find((god) => god.name == godsSelect.toString())
  let cardsContainer = document.querySelector(".cards")
  const card = document.createElement("div")
  card.setAttribute("class", "card")
  cardsContainer.prepend(card)

  card.textContent = `Name: ${selected.name} Romanname: ${selected.romanname}`
  let cardImage = document.createElement("img")
  cardImage.setAttribute("src", selected.url)
  card.append(cardImage)
}

createOption()
