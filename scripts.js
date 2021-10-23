const calculate = document.getElementById('calculate')
const one = document.getElementById('one');
const two = document.getElementById("two")
const input = document.getElementById('input')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const add = document.getElementById('add')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const minus = document.getElementById('minus')
const cancel = document.getElementById('cancel')
const memory = document.getElementById('memory')



calculate.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression.split("").includes("+")){
        localStorage.setItem('recent', expression)
        let stmnt = expression.split("+")
        let sum = 0
        stmnt.forEach(x=>{
            sum+=parseInt(x)
        })
        input.innerHTML = sum
    } else if(expression.split("").includes("-")){
        localStorage.setItem('recent', expression)
        let stmnt = expression.split("-")
        let sum = stmnt[0]-stmnt[1]
        
        input.innerHTML = sum

    }else if(expression.split("").includes("*")){
        localStorage.setItem('recent', expression)
        let stmnt = expression.split("*")
        let sum = stmnt[0]*stmnt[1]
        input.innerHTML = sum
    }else if(expression.split("").includes("/")){
        localStorage.setItem('recent', expression)
        let stmnt = expression.split("/")
        let sum = stmnt[0]/stmnt[1]
        input.innerHTML = sum
    }else{
        input.innerHTML = expression
    }
    
})

cancel.addEventListener('click', ()=>{
    input.innerHTML = "0"
})

one.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "1"
    }else{
        input.innerHTML = expression + "1"
    }
    
})

two.addEventListener('click', ()=>{

    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "2"
    }else{
        input.innerHTML = expression + "2"
    }
    
})

three.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "3"
    }else{
        input.innerHTML = expression + "3"
    }
})

four.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "4"
    }else{
        input.innerHTML = expression + "4"
    }
})

five.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "5"
    }else{
        input.innerHTML = expression + "5"
    }
})

six.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "6"
    }else{
        input.innerHTML = expression + "6"
    }
})

seven.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "7"
    }else{
        input.innerHTML = expression + "7"
    }
})

eight.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "8"
    }else{
        input.innerHTML = expression + "8"
    }
})

nine.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "9"
    }else{
        input.innerHTML = expression + "9"
    }
})

zero.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "0"
    }else{
        input.innerHTML = expression + "0"
    }
})

multiply.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "*"
    }else{
        input.innerHTML = expression + "*"
    }
})

add.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "+"
    }else{
        input.innerHTML = expression + "+"
    }
})

minus.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "-"
    }else{
        input.innerHTML = expression + "-"
    }
})

divide.addEventListener('click', ()=>{
    let expression = input.innerHTML
    if(expression == "0"){
        input.innerHTML = "/"
    }else{
        input.innerHTML = expression + "/"
    }
})

memory.addEventListener('click', ()=>{
    let expression = localStorage.getItem('recent')
    input.innerHTML = expression
})


