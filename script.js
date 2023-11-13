const addButton = document.querySelector('input.addButton')
const num = document.getElementById('number')
const lis = document.getElementById('select')
const secondButton = document.getElementById('secondButton')
let values = []

function isNum(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inList(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function toAdd(){
    if(isNum(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        lis.appendChild(item)
        res.innerHTML = ""
    }else {
        alert('Invalid value or already found in the list!!!')
    }
    num.value = ""
    num.focus()
}

addButton.addEventListener('click', toAdd)
