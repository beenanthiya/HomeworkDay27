//---- ข้อ 1 ------//

    let arr =[0,1,2,3,4,5,6,7,8,9,10];
    let filter = arr.filter((i)=>i%2 != 0);
    console.log("ข้อ 1 คือ " + filter +"\n")


//---- ข้อ 2 ------//

    let arr2=[0,9,1,8,2,7,3,6,4,5];
    sort2 = arr2.sort();
    console.log("ข้อ 2 คือ " + sort2 +"\n")


//---- ข้อ 3 ------//

    let arr3 =[0,1,2,3,4,5,6,7,8,9,10];
    let ar = [];
    for (i=0 ; i < arr3.length; i++){
                if (arr[i]%2 != 0){
                    ar.push(arr3[i])
                }
            }
    console.log("ข้อ 3 คือ " +ar +"\n")
        
//---- ข้อ 4 ------//
    const arr4 = new Map([["Adam" , "28"],["Sophie" , "22" ],[ "Aorum" , "13" ]]);
    console.log("ข้อ 4 คือ " + arr4.get("Adam")+"\n")
    console.log("ข้อ 4 คือ " + arr4.get("Sophie")+"\n")
    console.log("ข้อ 4 คือ " + arr4.get("Aorum")+"\n")

//---- ข้อ 5 ------//
    let arr5 =[0,9,1,8,2,7,3,6,4,5];
        for (var i = 1; i < arr5.length; i++) {
            if (arr5[i] < arr5[0]) {
                arr5.unshift(arr5.splice(i,1)[0]);
            } 
            else if (arr5[i] > arr5[i-1]) {
                continue;
            } 
            else {
                for (var j = 1; j < i; j++) {
                    if (arr5[i] > arr5[j-1] && arr5[i] < arr5[j]) {
                        arr5.splice(j,0,arr5.splice(i,1)[0]);
                    }
                }
            }
        }
console.log("ข้อ 5 คือ " +arr5+"\n");
    