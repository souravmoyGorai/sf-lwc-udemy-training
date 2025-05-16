
console.log('testing')
var course = "zero to hero"
console.log(course)
var course = "zero to hero in lwc"
console.log(course)
//everything in javascript is binded by window
console.log(window)
console.log(window.course)

//function scope
function abc() {
    var anotherCourse = "hero in lwc"
    console.log(anotherCourse)
}
//console.log(anotherCourse)   error

//block scope
if (2 == 2) {
    var x = 10
}
console.log(x)  // no error as, x is available outside of block

//DATATYPE
var x = 10
console.log(typeof x)       //number

var y = 10n
console.log(typeof y)       //bigInt

var name = "Sourav"
console.log(typeof name)    //string

var isMonday = true
console.log(typeof isMonday)    //boolean

var z
console.log(typeof z)       //undefined

var obj = {}
console.log(typeof obj)     //object

var arr = []
console.log(typeof arr)     //object

var sym = Symbol("id")
console.log(typeof sym)     //symbol

var x = 10
x = null
console.log(typeof x)       //object (typeof null is object)


//Equality Operator
    // normal  comparision ==
    // strict comparision ===

//Spread Operator ...
var arr = ["a", "b", "c"]
console.log(arr)
console.log(arr[0])
//add value to array
arr.push("3")

var obj = {
    "name" : "sourav",
    "age" : 30,
    "full name" : "souravmoy gorai"
}   // object is always key value pair
console.log(obj.age)
console.log(obj["name"])
console.log(obj["full name"])
obj.hobbies = "cricket"     //add values to object

//1. Expanding a string
let greeting = "Hello World"
let charList = [...greeting]
console.log(charList)

//2. Combining arrays **IMP FOR LWC
let arr1 = ["amazon", "google"]
let arr2 = ["facebook", "instagram"]
let arr3 = [...arr1, ...arr2]
console.log(arr3)

//3. adding values to array
let arr4 = ["a", "b", "c", "d"]
let arr5 = [...arr4, "sourav"]
console.log(arr5)

//4. Combining objects
let obj1 = {name : "Souravmoy", age : 30}
let obj2 = {name : "Akash", age : 34}
let obj3 = {...obj1, ...obj2}          // second variable has higher precedence and overrites the first one
console.log(obj3)

//5. Shallow copy  **IMP for LWC
var arr10 = ["a","b","c"]
var arr11 = arr10
arr11.push(20)
console.log(arr10)             //problem with push
console.log(arr11)             //both arr10 and arr11 displays same value as it refence to same memory.

var arr12 = [...arr11]
arr12.push("Sourav")
console.log(arr11)
console.log(arr12)


// DESTRUCTURING - array
let newArr = ["amazon", "google"]
//let company1 = newArr[0];             //cumbersome to assign each elements to variable
//let company2 = newArr[1];

let [company1, company2] = arr          //declare all variables and each index will be assigned to each

// DESTRUCTURING - object   ** IMP FOR LWC
let options = {title : "zero to hero", age:23, type:"CRM"}
//var title = options.title
let {title, age, type} = options
console.log(title)


//STRING METHODS
let str = "Hello guys! I hope you are doing good"
//1.includes---checks if characters are present in string
let check = str.includes("hope")
console.log(check)
//2.indexOf - returns the position of first occurence of string
let index = str.indexOf("strudent")
console.log(index)      // -1 if string is not available
//3. startsWith() - determines if string starts with certain string
console.log(str.startsWith("Hello"))
//4. slice() -- extracts a part of the string
console.log(str.slice(5,15))
//5. toLowerCase() -- converts to lower case
console.log(str.toLowerCase())
//6. toUpperCase() -- converts to upper case
console.log(str.toUpperCase())
//7. trim() -- removes whitespace from both sides
let searchText = "      salesforce learninbg    "
console.log(searchText.trim())


//OBJECT METHODS
let courseObj = {name:"Salesforce", course:"Zero to Hero in LWC"}
console.log(Object.keys(courseObj))     //returns all keys in array format
console.log(Object.values(courseObj))   //returns all values in array format
console.log(JSON.stringify(courseObj))  //makes an object into string
console.log(JSON.parse(JSON.stringify(courseObj)))  // converts a string into object


//ARRAY METHODS
let arrNew = [2,3,4,5,6,7]
//syntax  **IMP
//arrNew.methodName(function(currentItem, index, actualArray) {})

//1. map()
let modArr = arrNew.map(function(currentItem,index, array){
    console.log(`current item is ${currentItem} index ${index}`)
    return currentItem*2
})
console.log(modArr)
//2. filter()       // returns elements thats satisfies the condition
let filterArr = arrNew.filter(function(currentItem,index, array){
    return currentItem > 5
})
console.log(filterArr)
//3. every()        // checks if all items in array satisfy the condition
let everyArr = arrNew.every(function(currentItem,index, array){
    return currentItem > 5
})
console.log(everyArr)
//4. some()         // checks if atleast 1 item satisfy the condition
let someArr = arrNew.some(function(currentItem,index, array){
    return currentItem > 5
})
console.log(someArr)
//5. sort()         // sorts an array
let charArr = ["Z", "B", "G", "T", "S"]
console.log(charArr.sort())
let pointsArr = [56, 67, 101, 43, 20]
let sortedArr = pointsArr.sort(function(a,b){
    return a-b          // a-b will return in ascending order
})
console.log(sortedArr)
//6. reduce()       // reduce an array to single value
//let reduceArr = arrNew.some(function(total, currentItem,index, array){
//    return currentItem > 5
//}, initialValue)
let reduceArr = arrNew.reduce(function(total, currentItem){
    return total + currentItem
}, 0)
console.log(reduceArr)
//7. forEach()      // loops on the array
arrNew.forEach(function(currentItem,index, array){
    console.log(currentItem)
})


//IMPORT
import minus, {PI, add} from './utils.js'
console.log(PI)
console.log(add(3,5))
console.log(minus(10,7))

//to import all in one starement
import * as UTILS from './utils.js'
console.log(UTILS.PI)


//QUERY SELECTOR
let element = document.querySelector('div')
console.log(element)

let elementAll = document.querySelectorAll('div')
console.log(elementAll)
Array.from(elementAll).forEach(function (item) {
    console.log(item)
})

function firstfunction() {
    console.log("Hurray!!!")
}

let btn = document.querySelector("button")
btn.addEventListener("click", firstfunction)

document.addEventListener("mousemove", handler)
function handler() {
    document.querySelector(".demo").innerHTML = Math.random()
}

let btn2 = document.querySelector("#stoprandom")
btn2.addEventListener("click", removeEvent)
function removeEvent() {
    document.removeEventListener("mousemove", handler)
}

document.addEventListener("hello", function(data){
    console.log("Hello has called and send ", data.detail)
})


let btn3 = document.querySelector("#customevent")
btn3.addEventListener("click", callCustomEvent)
function callCustomEvent() {
    let event = new CustomEvent("hello", {
        detail:{name:"Souravmoy"}
    })
    document.dispatchEvent(event)
}


//ARROW FUNCTION
//function newFunction() {        //normal function
//    console.log("hello")
//}
//newFunction()

const newFunction = ()=> console.log("Hello Arrow")
newFunction()

const sum = data=>{             // data is parameter. single parameter () not reqd
    let sum = data + 10
    return sum
}
console.log(sum(20))

const newTotal = (data1, data2)=>{
    let sum = data1 + data2
    return sum
}
console.log(newTotal(10,29))