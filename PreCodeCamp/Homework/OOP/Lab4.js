let circle = {
    x: 200,
    y: 300,
    name: "my circle"
  }

  console.log(circle)

 function multiplyNumeric(obj){
     for (let value in obj) {
         if(typeof obj[value] == "number"){
            obj[value] = obj[value] * 2
         }
     }
     return obj
 }

 console.log(multiplyNumeric(circle))