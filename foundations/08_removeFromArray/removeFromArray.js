const removeFromArray = function(arr, ...index) {
    let newArr = [];
    arr.forEach((item)=> { 
        if (!index.includes(item)) {
            newArr.push(item)
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
