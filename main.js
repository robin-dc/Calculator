let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let equals = document.getElementById('equals');
let del = document.getElementById('del');
let input1 = document.getElementById('input1');
let buttons = document.querySelectorAll('button')

let text = ''
one.addEventListener('click', function(){
    input1.value = text += 1
})
two.addEventListener('click', function(){
    input1.value = text += 2
})
three.addEventListener('click', function(){
    input1.value = text += 3
})
four.addEventListener('click', function(){
    input1.value = text += 4
})
five.addEventListener('click', function(){
    input1.value = text += 5
})
six.addEventListener('click', function(){
    input1.value = text += 6
})
seven.addEventListener('click', function(){
    input1.value = text += 7
})
eight.addEventListener('click', function(){
    input1.value = text += 8
})
nine.addEventListener('click', function(){
    input1.value = text += 9
})
zero.addEventListener('click', function(){
    input1.value = text += 0
})
plus.addEventListener('click', function(){
    input1.value = text += "+"
})
minus.addEventListener('click', function(){
    input1.value = text += "-"
})
times.addEventListener('click', function(){
    input1.value = text += "*"
})
divide.addEventListener('click', function(){
    input1.value = text += "/"
})
equals.addEventListener('click', function(){
    let array = text.split("")
    for(let i = 0; i < array.length; i++){
        if(!Number.isInteger(array[i])){
            if(array[i] == "+"){
                let answer = Number(array.slice(0, i).join("")) + Number(array.slice(i+1, array.length).join(""))
                text = answer
                input1.value = answer
            }
            else if(array[i] == "-"){
                let answer = Number(array.slice(0, i).join("")) - Number(array.slice(i+1, array.length).join(""))
                text = answer
                input1.value = answer
            }
            if(array[i] == "*"){
                let answer = Number(array.slice(0, i).join("")) * Number(array.slice(i+1, array.length).join(""))
                text = answer
                input1.value = answer
            }
            if(array[i] == "/"){
                let answer = Number(array.slice(0, i).join("")) / Number(array.slice(i+1, array.length).join(""))
                text = answer
                input1.value = answer
            }
        }
    }
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true
    }
    del.disabled = false

})
del.addEventListener('click', function(){
    input1.value = text = ""
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = false
    }
})
