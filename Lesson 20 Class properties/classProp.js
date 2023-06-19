// class Counter {
  
//   constructor() {
//     this.count = 0;
//     this.increment = () => {
//       this.count += Counter.incrementStep;
//     }
//   }
// }

// Counter.incrementStep = 2;

// Counter.incrementAll = function(arr) {
//   arr.forEach((c) = c.increment()) 
// }

class Counter {
  count = 0;
  increment = () => {
    this.count += Counter.incrementStep;
  }
  static incrementStep = 2;
  static incrementAll = function (arr) {
    arr.forEach((c) =>  c.increment());
  }
}

console.log(Counter);