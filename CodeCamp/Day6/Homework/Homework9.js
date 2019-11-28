function sortAlpha(str_num, str_alpha) {
    let arr_str_num = str_num.split(' ');
    let arr_num = [];
    for (let i = 0; i < arr_str_num.length; i++) {
        arr_num.push(parseInt(arr_str_num[i]));
    }
    arr_num.sort(); //
    let arr_str_alpha = str_alpha.split('');
    let arr_alpha = [];
    for (let i = 0; i < arr_str_alpha.length; i++) {
        arr_alpha.push(arr_str_alpha[i]);
    }
    arr_alpha.sort(); //
    // console.log(arr_num);
    // console.log(arr_alpha);
    let obj = {};
    for (key in arr_alpha) {
        obj[arr_alpha[key]] = arr_num[key];
    }
    let step = str_alpha.split('');
    let res = '';
    for (key in step) {
        res += obj[step[key]] + ' ';
    }
    return res;
}

console.log(sortAlpha('1 5 3', 'ABC'));
console.log(sortAlpha('6 4 2', 'CAB'));