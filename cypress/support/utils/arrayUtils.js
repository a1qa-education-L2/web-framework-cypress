module.exports = class ArrayUtils{

    static isAllElementsOfArrayEqual(array){
        return array.every(element => array[1] === element);
    }
    
    static getArrayFromString(string){
        return string.split(',').map(element => element.trim())
    }

    static isNumberArraySortedAscending(array) {
        return array.every(function(number, index, arr) {
          return (number <= arr[index + 1]) || (index === arr.length - 1) ? 1 : 0;
        });
    }
}