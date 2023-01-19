//Remove Blanks

// function removeBlanks(string) {

//     let string2 = ''

//     for (let i=0; i< string.length; i++) {
//         if(string[i] !== ' ') {
//             string2 += string[i]
//         }
//     }
//     return string2
// }

// let yuckyString = removeBlanks(" Pl ayTha tF u nkyM usi c ")
// console.log(yuckyString)


//Get Digits

// function getDigits(string) {
//     let string2 = ''
//     for (let i = 0; i<string.length; i++) {
//         if(Number(string[i]) || Number(string[i])==0) {
//             string2 += string[i]
//         }
//     }
//     return string2
// }

// console.log(getDigits("abc8c0d1ngd0j0!8"))
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))


//Acronyms

// function makeAcronyms(string) {
//     let string2 = ''
//     for (let i = 0; i<string.length; i++) {
//         if(string[0]!==' ') {
//             string2 += i[0]
//         }
//         if(string[i] == ' ') {
//             string2 += string[i+1]
//         }
//         if(string[string.length-1] == ' ') {
//             string2 += ''
//         }
//     }
//     return string2
// }

// console.log(makeAcronyms(" there's no free lunch - gotta pay yer way. "))
// console.log(makeAcronyms("Live from New York, it's Saturday Night!"))

//Count Non-Spaces

// function countNonSpaces(string) {
//     let count = 0
//     for (let i=0; i<string.length; i++) {
//         if(string[i] !== " "){
//             count = count + 1
//         }
//     }
//     return count
// }

// console.log(countNonSpaces("Honey pie, you are driving me crazy"))
// console.log(countNonSpaces("Hello world !"))


//Remove Shorter Strings

// function removeShorterStrings(array, num) {
//     let newArray = []
    
//     for (let i = 0; i<array.length; i++) {
//         let count = 0
//         for (let j = 0; array[i].length; j++) {
//             count= count + 1
//         }
//         if (count>=num) {
//             newArray += array[i]
//         }
//     }
//     return newArray
// }

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))