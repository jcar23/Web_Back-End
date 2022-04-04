var utils = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        } else 
        return false;
    },
    max: function (array) {
        var max = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] > max  ) {
                max = array[i]
            }
        }
        return max;
    },
    min: function (array) {
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
        }
        return min;
    },
    average: function (array) {
        var med = 0;
        for (var i = 0; i < array.length; i++) {
            med += array[i]
        }
        med /= array.length
        return med
    },
    indexOf: function (array, value) {
        for (var i = 0; i < array.length; i++){
            if (array[i]==value){
            }
            //var result = array.indexOf(value)
        }
        return i
    },
    subArray: function (array, startIndex, endIndex) {
        var newArray = []
        for (var i = startIndex; i < endIndex; i++){
            newArray.push(array[i])
    }
        return newArray
    },
    isSameLength: function (a1, a2) {
        return a1.length == a2.length
    },
    reverse: function (array) {
        newArray = [];
        for (var k = array.length -1; k >= 0; k--){
            newArray.push(array[k])
        }
        return newArray
    },
    swap: function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;

        return array
    },
    contains: function (array, value) {
        for (var j = 0; j < array.length; j++) {
            if ( array.indexOf(value) == -1){
                return false;
            }
            else
            return true;
        }
        //if( value == -1) false
        //else  true
    },
    concatenate: function(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {   
            }
            var newArray = [].concat(array1,array2)
        }
        return newArray
    }
}
module.exports = utils; 