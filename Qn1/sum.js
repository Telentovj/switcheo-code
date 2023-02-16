//Iterative
var sum_to_n_a = function (n) {
    let answer = 0
    for (let i = 0; i < n + 1; i++) {
        answer += i
    }
    return answer
};
//Recursive
var sum_to_n_b = function (n) {
    if (n == 0) {
        return 0
    }
    return n + sum_to_n_b(n - 1)
};
//AP formula
var sum_to_n_c = function (n) {
    return n * (n + 1) / 2;
};
