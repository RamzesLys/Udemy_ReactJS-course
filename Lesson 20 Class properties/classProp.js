class Counter {
  count = 0;
  
  constructor() {
    this.count = 0;
    this.increment = () => {
      this.count += Counter.incrementStep;
    }
  }
  
 
//  inc = () => {
//     this.count += Counter.incrementStep;
//     console.log(this.count);
//   }
//   static incrementStep = 2;

//   static incrementAll = function(arr) {
//     arr.array.forEach((c) = c.inc()) 
//   }
}

Counter.incrementStep = 2;

Counter.incrementAll = function(arr) {
  arr.forEach((c) = c.increment()) 
}


// Counter.incrementAll

// const cnt = new Counter();
// console.log(cnt.count);

// cnt.inc();
// setTimeout(cnt.inc, 1000);

