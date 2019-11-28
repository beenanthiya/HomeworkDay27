function upper_case(str) {
    regexp = /[A-Z]/;
    if (regexp.test(str)) {
        console.log("All Capital Letter")
    } else {
        return false;
    }
}

function lower_case(str) {
    regexp = /[a-z]/;
    if (regexp.test(str)) {
        console.log("All Small Letter")
    } else {
        return false;
    }
}

function mix_case(str) {
    regexp = /[a-z][A-Z]/;
    if (regexp.test(str)) {
        console.log("Mix")
    } else {
        return false;
    }
}

upper_case("ABCDEFG")
lower_case("abcdefg")
mix_case("AbCdEfG")