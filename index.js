const { Calc } = require('./calc')

const [,,x=0,operator,y=0] = process.argv

const calc = new Calc(x, y)

if (operator == '+') {
  console.log(calc.add())
} else if (operator == '-') {
  console.log(calc.substract())
} else if (operator == 'x') {
  console.log(calc.multoplicate())
} else if (operator == ':') {
  console.log(calc.divade())
}