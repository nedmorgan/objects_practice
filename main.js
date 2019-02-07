// let bike = {
//   wheels: 'WTB',
//   tires: 'Continental',
//   handlebar: 'Jones',
//   drivetrain: 'Shimano',
//   gears: 27,
//   lights: true,
//   'crankset-teeth': [32, 44, 52],
//   ride: function(name) {
//     console.log(`${name} has ${this.gears} gears on his bike`)
//   }
// }

// var user = {
//   fullName: "James Reichard",
//   favoriteFoods: ["Ramen", "Capn Crunch", "Tacos", "Pizza"],

//   displayFoods: function () {
//     console.log(`Things ${this.fullName} likes:`)
//     this.favoriteFoods.forEach(food => 
//       console.log(food)
//     )
//   }

// }

// user.displayFoods()

let calculator = {
  value: 0,
  add: function (a, b) {
    this.value = a + b
    console.log(this.value)
  },
  subtract: function (a, b) {
    this.value = a - b
    console.log(this.value)
  },
  multiply: function (a) {
    if (this.value <= 0) {
      this.value = 1
      this.value *= a
      console.log(this.value)
    } else {
      this.value = this.value * a
      console.log(this.value)
    }
  },
  divide: function (a) {
    if (this.value <= 0) {
      this.value = 1
      this.value /= a
      console.log(this.value)
    } else {
      this.value = this.value / a
      console.log(this.value)
    }
  },
  exp: function (a) {
    if (this.value <= 0) {
      this.value = 1
      this.value = Math.exp(a)
      console.log(this.value)
    } else {
      this.value = Math.exp(a)
      console.log(this.value)
    }
  },
  power: function (a, b) {
    this.value = Math.pow(a, b)
    console.log(this.value)
  },
  clear: function () {
    this.value = 0
  }
}