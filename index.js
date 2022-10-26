const runLoop = (paramOne, paramTwo) => {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log('i is 5!!!')
    }
    console.log(i)
  }
  console.log(paramOne, paramTwo)

  paramTwo()
}
const logBam = () => console.log('bam')

runLoop('zoo', logBam)

// fns being passed into a fn are called callbacks
