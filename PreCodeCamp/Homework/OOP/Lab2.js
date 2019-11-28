let one = null
let two = "Bee"

function isEmpty(obj){
    if(obj == null){
        return true
    }
    else{
        return false
    }
}

console.log("Return "+ isEmpty(one));
console.log("Return "+ isEmpty(two));