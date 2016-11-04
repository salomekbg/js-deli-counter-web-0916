function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${array.shift()}.`
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var string = `The line is currently:`
  for (let i = 0; i < (line.length - 1); i++) {
    string += ` ${i + 1}. ${line[i]},`
  }
  string += ` ${line.length}. ${line[line.length - 1]}`
  return string
}

// function currentLine(line) {
//   if (!line.length) {
//     return "The line is currently empty."
//   }
//
//   const numbersAndNames = []
//
//   for (let i = 0, l = line.length; i < l; i++) {
//     numbersAndNames.push(`${i + 1}. ${line[i]}`)
//   }
//
//   return `The line is currently: ${numbersAndNames.join(', ')}`
// };
