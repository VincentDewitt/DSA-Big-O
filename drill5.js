//Naive Search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//O(n) becuase the complexity of this function deponds on the number of elements in the array