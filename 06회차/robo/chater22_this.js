//22-01
const circle = {
    radius : 5,
    getDiameter() {
        return 2 * circle.radius;
    }
};
console.log(circle.getDiameter());


//22-03
const circle2 = {
    radius :4,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());




