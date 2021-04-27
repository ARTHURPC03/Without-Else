
function netValue(person) {
  if(person.value !== null && person.contractingRegime !== null) {
    if (person.contractingRegime === 'PJ') {
      console.log("PJ")
      console.log("6%", percentageDecrease(person.value, 6))
    } else if (person.contractingRegime === 'CLT') {
      console.log("CLT")
      if(person.value <= 1903.98) {
        console.log("0%", person.value)
      } else if(person.value <= 2826.65) {
        console.log("7.5%", percentageDecrease(person.value, 7.5))
      } else if(person.value <= 3751.05) {
        console.log("15%", percentageDecrease(person.value, 15))
      } else if(person.value <= 4664.6) {
        console.log("22.5%", percentageDecrease(person.value, 22.5))
      } else {
        console.log("27.5%", percentageDecrease(person.value, 27.5))
      }
    }
  } else {
    console.log("Algo de errado não está certo")
  }
}

function percentageDecrease(value, percentage) {
  return value - (value * percentage / 100)
}

const person = {
  value: 5000,
  contractingRegime: 'PJ',
}

netValue(person)
