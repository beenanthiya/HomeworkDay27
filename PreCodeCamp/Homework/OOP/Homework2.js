function parrot(name, hairColor) {
    this.name = name
    this.hairColor = hairColor
}
 
let Bruce = new parrot("Bruce", "Black")

let ownProps = [];

for (let property in Bruce) {
    if(Bruce.hasOwnProperty(property)){ 
        ownProps.push(property) 
    }
}

// console.log(Bruce)
//console.log(Bruce instanceof parrot)
console.log(ownProps)