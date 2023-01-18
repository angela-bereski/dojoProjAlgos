//Push Front

function arrayPush(arr) {
    arr.push(0)
    console.log(arr)
    for(let i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0]=0
    console.log(arr)
}
arrayPush([1,2,3,4])

//Pop Front

function arrayPop(arr) {
    for(let i = 1; i<arr.length;i++) {
        arr[i-1]=arr[i]
    }
    arr.pop()
    console.log(arr)
}
arrayPop([0,5,10,15])


//Insert At

function insertAt(arr, index, val) {
    arr.push(val)
    if (index >= arr.length) {
        let j = index - arr.length + 1
        while (j--) {
            arr.push(undefined)
        }
    }
    arr.splice(index, 0, arr.splice(arr.length-1, 1)[0])
    return arr
}

console.log(insertAt([9,33,7], 1, 42))
console.log(insertAt([1,2,4,5], 2, 3))
