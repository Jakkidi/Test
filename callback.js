// callback Example
function printString(string, callback){
  setTimeout(
    () => {
      console.log(string)
      callback()
    },
    Math.floor(Math.random() * 100) + 1
  )
}
function printAll(){
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {})
    })
  })
}
// printAll()
// Promises
function print2String(string){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
       console.log(string)
       resolve()
      },
     Math.floor(Math.random() * 100) + 1
    )
  })
}
function print2All(){
  print2String("A")
  .then(() => print2String("B"))
  .then(() => print2String("C"))
}
// print2All()

//Async -await
function print3String(string){
  setTimeout(
    () => {
      console.log(string)
    },
    Math.floor(Math.random() * 100) + 1
  )
}
async function print3All(){
  await print3String("A")
  await print3String("B")
  await print3String("C")
}
// print3All()
