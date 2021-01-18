//how to traverse object

var point = {
    x: 10,
    y: 20,
    z: 30

}

//console.log('x' in point)

for (var i in point) {
    console.log(i)

    console.log(point[i])
}