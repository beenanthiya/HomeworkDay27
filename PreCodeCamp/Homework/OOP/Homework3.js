function parrot(name) {
    this.name = name
 }

 parrot.prototype.numLegs = 2

 let Bruce = new parrot("Bruce")

 console.log(Bruce.numLegs)