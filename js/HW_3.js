function getArrSum(Array) {
    var add = 0;
    for (var a = 0; a < Array.length; a++) {
        var el = Array[a];
        add += el;
    }
    return add;
}
console.log(getArrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



var str = prompt("Ведите нужное количество слов");
    function getArrSum(str) {
        return str.split(" ").length; }
        console.log(getArrSum(str));


var Str = prompt('Введите строку');
function getReversedStr(Str) {
    var result = Str.split('');
    result = result.reverse();
    result = result.join('');
    return result;}
console.log(getReversedStr(Str));


