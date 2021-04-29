function netValueBetter(person) {
  if (person?.value === null || person?.contractingRegime === null) return console.log("Algo de errado não está certo")

  let response
  if(person.contractingRegime === 'PJ') {
    response = `PJ\n6% ${percentageDecrease(person.value, 6)}`
  } 

  if(person.contractingRegime === 'CLT') {
    response = netValueCLTResponse(person)
  }

  console.log(response)
}

function netValueCLTResponse(person) {
  if(person.value <= 1903.98) return `CLT\n0% ${person.value}`

  if(person.value <= 2826.65) return `CLT\n7.5% ${percentageDecrease(person.value, 7.5)}`
  
  if(person.value <= 3751.05) return `CLT\n15% ${percentageDecrease(person.value, 15)}`

  if(person.value <= 4664.6) return `CLT\n22.5% ${percentageDecrease(person.value, 22.5)}`

  return `CLT\n27.5% ${percentageDecrease(person.value, 27.5)}`
}

function percentageDecrease(value, percentage) {
  return value - (value * percentage / 100)
}

const person = {
  value: 5000,
  contractingRegime: 'PJ',
}

netValueBetter(person)
