class Lion {
  constructor(name, hairColor) {
    this.name = name
    this.hairColor = hairColor
  }
  logName() {
    console.log('Roar! I am ', this.name)
  }
}
// 2 lion instances
const goldenLion = new Lion('Mustafa', ' golden')
const redLion = new Lion('Scar', 'red')

console.log(goldenLion)
console.log(redLion)

goldenLion.logName()
redLion.logName()
