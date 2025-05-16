//Javascript Utility file to contain all variables and methods that can be exported
//Common place for functions that can be reusable

//Normal Export
export const PI = 3.14

export function add(a,b){
    return (a + b)
}


//export together
const name = "Sourav"
function printName(data){
    console.log(data)
}
export {name, printName}

//export alias
const name_of_person = "Salesforce"
export {name_of_person as nameP}

//export default
export default function minus(a, b) {
    return (a-b)
}