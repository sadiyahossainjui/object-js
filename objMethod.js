//some built in obj methods

var point = {
    x: 10,
    y: 20,
    z: 30

}

// console.log(Object.keys(point))
// console.log(Object.values(point))
// console.log(Object.entries(point))

var point1 = Object.assign(point) //creating new object
point.y = 40
console.log(point1)