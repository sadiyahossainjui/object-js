//comparing two objects

var point = {
    x: 10,
    y: 20

}

var point1 = {
    x: 10,
    y: 20

}


console.log(JSON.stringify(point)) == JSON.stringify(point1) //comparing object using json method


//comparing object using logic

if (point.x == point1.x && point.y == point1.y) {
    console.log(true)
} else {
    console.log(false)
}