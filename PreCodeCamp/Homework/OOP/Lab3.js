let teamSalaries = {
    He: 100,
    She: 160,
    Me: 130
  }

  function sum(obj){
      let result = 0
      for(let money in obj){
          result = result + obj[money]
      }
     return result 
  }

  console.log("Team Salaries is " + sum(teamSalaries))


  